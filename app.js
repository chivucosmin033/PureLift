/**
 * PURELIFT Store - Application Logic
 */

// ---------- State ----------
const state = {
  cart: JSON.parse(localStorage.getItem('purelift_cart_v2') || '[]'),
  discountPercent: 0
};

const SHIPPING_COST = { easybox: 0, courier: 0 };

const ROMANIAN_COUNTIES = [
  "București", "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov", "Brăila",
  "Buzău", "Caraș-Severin", "Călărași", "Cluj", "Constanța", "Covasna", "Dâmbovița", "Dolj", "Galați",
  "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov", "Maramureș", "Mehedinți",
  "Mureș", "Neamț", "Olt", "Prahova", "Satu Mare", "Sălaj", "Sibiu", "Suceava", "Teleorman", "Timiș",
  "Tulcea", "Vaslui", "Vâlcea", "Vrancea"
];

// ---------- Helpers ----------
function formatPrice(priceRon) {
  return `${Math.round(priceRon * 100) / 100} lei`;
}

const ICON_CHECK = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
const ICON_X = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;

function saveCart() {
  localStorage.setItem('purelift_cart_v2', JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.textContent = totalItems;
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toastIcon.innerHTML = type === 'error'
    ? `<span class="text-red-400">${ICON_X}</span>`
    : `<span class="text-white">${ICON_CHECK}</span>`;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2800);
}

// Single source of truth for all money calculations (cart + checkout + confirmation)
function computeTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.priceRon * item.quantity, 0);
  const discount = (subtotal * state.discountPercent) / 100;
  const afterDiscount = subtotal - discount;
  return { subtotal, discount, afterDiscount, shipping: 0, total: afterDiscount };
}

// ---------- Catalog ----------
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  container.innerHTML = PRODUCTS_DATA.map(product => `
    <article class="group flex flex-col">
      <div class="relative w-full aspect-square bg-[#141416] overflow-hidden product-image-container cursor-pointer" onclick="openQuickView('${product.id}')">
        <img src="${product.image}" alt="${product.title} – față" loading="lazy" class="front-img absolute inset-0 w-full h-full object-cover" />
        <img src="${product.backImage}" alt="${product.title} – spate" loading="lazy" class="back-img absolute inset-0 w-full h-full object-cover" />
      </div>

      <div class="pt-4 flex flex-col flex-1 gap-4">
        <div class="flex items-center justify-between gap-4">
          <p class="text-sm text-zinc-400 cursor-pointer hover:text-white transition" onclick="openQuickView('${product.id}')">${product.subtitle}</p>
          <span class="text-[15px] font-medium text-white whitespace-nowrap">${formatPrice(product.priceRon)}</span>
        </div>

        <div class="mt-auto space-y-3">
          <div class="flex gap-1.5" id="size-pill-container-${product.id}">
            ${product.sizes.map(s => `
              <button type="button" ${s.stock === 0 ? 'disabled' : ''}
                onclick="selectQuickSize('${product.id}', '${s.size}')"
                id="size-btn-${product.id}-${s.size}"
                class="size-btn h-9 flex-1 text-xs font-medium border transition ${s.stock === 0 ? 'border-[#1f1f23] text-zinc-700 line-through cursor-not-allowed' : 'border-[#2a2a30] text-zinc-300 hover:border-white hover:text-white'}">
                ${s.size}
              </button>
            `).join('')}
          </div>
          <button onclick="addQuickToCart('${product.id}')"
            class="w-full h-11 bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-[0.12em] transition">
            Adaugă în coș
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

const selectedSizes = {};

function selectQuickSize(productId, size) {
  selectedSizes[productId] = size;
  const container = document.getElementById(`size-pill-container-${productId}`);
  if (!container) return;
  container.querySelectorAll('.size-btn:not([disabled])').forEach(btn => {
    btn.classList.remove('bg-white', 'text-black', 'border-white');
    btn.classList.add('border-[#2a2a30]', 'text-zinc-300');
  });
  const active = document.getElementById(`size-btn-${productId}-${size}`);
  if (active) {
    active.classList.remove('border-[#2a2a30]', 'text-zinc-300');
    active.classList.add('bg-white', 'text-black', 'border-white');
  }
}

function addQuickToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const size = selectedSizes[productId];
  if (!size) {
    showToast('Alege mai întâi o mărime', 'error');
    return;
  }
  addToCart(productId, size, product.colors[0].name, 1);
}

// ---------- Cart ----------
function addToCart(productId, size, color, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(i => i.productId === productId && i.size === size && i.color === color);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ productId, title: product.title, priceRon: product.priceRon, image: product.image, size, color, quantity });
  }

  saveCart();
  showToast(`${product.title} (${size}) a fost adăugat în coș`);
  openCartDrawer();
}

function updateQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) state.cart.splice(index, 1);
  saveCart();
}

function removeFromCart(index) {
  if (!state.cart[index]) return;
  state.cart.splice(index, 1);
  saveCart();
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const footerArea = document.getElementById('cartFooterArea');
  const shippingMsgEl = document.getElementById('cartShippingProgressMsg');
  const shippingBarEl = document.getElementById('cartShippingProgressBar');
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = '';
    emptyState.classList.remove('hidden');
    footerArea.classList.add('hidden');
    if (shippingMsgEl) shippingMsgEl.parentElement.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  footerArea.classList.remove('hidden');
  if (shippingMsgEl) shippingMsgEl.parentElement.classList.remove('hidden');

  const t = computeTotals();
  if (shippingBarEl) shippingBarEl.style.width = '100%';
  if (shippingMsgEl) {
    shippingMsgEl.innerHTML = `Transportul este inclus în preț.`;
  }

  itemsContainer.innerHTML = state.cart.map((item, index) => `
    <div class="flex gap-4 py-4 border-b border-[#1f1f23] last:border-0">
      <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-cover bg-[#141416] flex-shrink-0" />
      <div class="flex-1 flex flex-col justify-between">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h4 class="text-sm text-white">${item.title}</h4>
            <div class="text-xs text-zinc-500 mt-0.5">${item.color} · ${item.size}</div>
          </div>
          <button onclick="removeFromCart(${index})" class="text-xs text-zinc-500 hover:text-white underline underline-offset-2 transition">Șterge</button>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center border border-[#2a2a30]">
            <button onclick="updateQuantity(${index}, -1)" class="w-8 h-8 text-sm text-zinc-400 hover:text-white" aria-label="Scade cantitatea">−</button>
            <span class="w-6 text-center text-sm text-white">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" class="w-8 h-8 text-sm text-zinc-400 hover:text-white" aria-label="Crește cantitatea">+</button>
          </div>
          <div class="text-sm text-white">${formatPrice(item.priceRon * item.quantity)}</div>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('cartSubtotal').textContent = formatPrice(t.subtotal);
  const discountRow = document.getElementById('cartDiscountRow');
  if (state.discountPercent > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('cartDiscount').textContent = `−${formatPrice(t.discount)}`;
  } else {
    discountRow.classList.add('hidden');
  }
  document.getElementById('cartTotal').textContent = formatPrice(t.afterDiscount);
}

// ---------- Promo codes ----------
const PROMO_CODES = {
  PUMP10: { type: 'percent', value: 10 },
  PUREVIP: { type: 'percent', value: 15 },
  FREESHIP: { type: 'shipping' }
};

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const messageEl = document.getElementById('promoMessage');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  const promo = PROMO_CODES[code];
  if (!promo) {
    messageEl.textContent = 'Codul nu este valid.';
    messageEl.className = 'text-xs text-red-400 mt-2 block';
    return;
  }
  if (promo.type === 'percent') state.discountPercent = promo.value;
  if (promo.type === 'shipping') state.freeShippingApplied = true;
  messageEl.textContent = `Codul ${code} a fost aplicat.`;
  messageEl.className = 'text-xs text-zinc-400 mt-2 block';
  saveCart();
}

// ---------- Drawers & modals ----------
function lockScroll(lock) { document.body.style.overflow = lock ? 'hidden' : ''; }

function openCartDrawer() {
  document.getElementById('cartDrawerBackdrop').classList.add('active');
  document.getElementById('cartDrawer').classList.add('active');
  lockScroll(true);
  renderCartDrawer();
}

function closeCartDrawer() {
  document.getElementById('cartDrawerBackdrop').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('active');
  lockScroll(false);
}

let activeModalSelectedSize = null;

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  activeModalSelectedSize = null;

  document.getElementById('quickViewContent').innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-3">
        <div class="w-full aspect-square bg-[#141416] overflow-hidden">
          <img id="modalMainImg" src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" />
        </div>
        <div class="flex gap-3">
          ${[product.image, product.backImage].map((src, i) => `
            <button onclick="setModalImage(this, '${src}')" class="modal-thumb w-20 h-20 overflow-hidden border ${i === 0 ? 'border-white' : 'border-[#2a2a30] opacity-60'} hover:opacity-100 transition" aria-label="${i === 0 ? 'Față' : 'Spate'}">
              <img src="${src}" alt="" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-xs uppercase tracking-[0.16em] text-zinc-500 mb-3">Drop 01 · 203 g/m²</div>
        <h2 class="text-xl font-medium text-white tracking-tight">${product.subtitle}</h2>
        <div class="text-lg text-white mt-2">${formatPrice(product.priceRon)}</div>

        <p class="text-sm text-zinc-400 leading-relaxed mt-6">${product.description}</p>

        <ul class="mt-6 space-y-2 text-sm text-zinc-300 border-t border-[#1f1f23] pt-6">
          ${product.specs.map(spec => `<li class="flex gap-3"><span class="text-zinc-600">—</span><span>${spec}</span></li>`).join('')}
        </ul>

        <div class="mt-6 text-sm text-zinc-400">Culoare: <span class="text-white">${product.colors[0].name}</span></div>

        <div class="mt-6">
          <div class="flex items-center justify-between text-sm mb-3">
            <span class="text-zinc-400">Mărime</span>
            <button onclick="openSizeCalculatorModal()" class="text-zinc-400 hover:text-white underline underline-offset-2 text-xs">Tabel mărimi</button>
          </div>
          <div class="grid grid-cols-4 gap-2">
            ${product.sizes.map(s => `
              <button id="modal-size-btn-${s.size}" ${s.stock === 0 ? 'disabled' : ''}
                onclick="selectModalSize('${s.size}')"
                class="modal-size-btn h-11 text-sm border transition ${s.stock === 0 ? 'border-[#1f1f23] text-zinc-700 line-through cursor-not-allowed' : 'border-[#2a2a30] text-zinc-200 hover:border-white'}">
                ${s.size}
              </button>
            `).join('')}
          </div>
        </div>

        <button onclick="addModalProductToCart('${product.id}')"
          class="mt-8 w-full h-12 bg-white text-black text-xs font-semibold uppercase tracking-[0.12em] hover:bg-zinc-200 transition">
          Adaugă în coș
        </button>
        <p class="mt-4 text-xs text-zinc-500">Transport inclus · Livrare în 24–48h · Retur în 14 zile</p>
      </div>
    </div>
  `;

  document.getElementById('quickViewModal').classList.add('active');
  lockScroll(true);
}

function setModalImage(btn, src) {
  document.getElementById('modalMainImg').src = src;
  document.querySelectorAll('.modal-thumb').forEach(b => {
    b.classList.remove('border-white');
    b.classList.add('border-[#2a2a30]', 'opacity-60');
  });
  btn.classList.remove('border-[#2a2a30]', 'opacity-60');
  btn.classList.add('border-white');
}

function selectModalSize(size) {
  activeModalSelectedSize = size;
  document.querySelectorAll('.modal-size-btn:not([disabled])').forEach(b => {
    b.classList.remove('border-white', 'bg-white', 'text-black');
    b.classList.add('border-[#2a2a30]', 'text-zinc-200');
  });
  const btn = document.getElementById(`modal-size-btn-${size}`);
  if (btn) {
    btn.classList.remove('border-[#2a2a30]', 'text-zinc-200');
    btn.classList.add('border-white', 'bg-white', 'text-black');
  }
}

function addModalProductToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  if (!activeModalSelectedSize) {
    showToast('Alege mai întâi o mărime', 'error');
    return;
  }
  addToCart(productId, activeModalSelectedSize, product.colors[0].name, 1);
  closeQuickView();
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('active');
  lockScroll(false);
}

function openSizeCalculatorModal() {
  document.getElementById('sizeCalculatorModal')?.classList.add('active');
}

function closeSizeCalculatorModal() {
  document.getElementById('sizeCalculatorModal')?.classList.remove('active');
}

// ---------- Size calculator ----------
function calculateGymSize() {
  const height = parseInt(document.getElementById('calcHeight').value, 10);
  const weight = parseInt(document.getElementById('calcWeight').value, 10);
  const resultContainer = document.getElementById('calcResultContainer');

  if (!height || !weight) {
    showToast('Completează înălțimea și greutatea', 'error');
    return;
  }

  let recommended;
  if (weight < 70) recommended = 'S';
  else if (weight < 80) recommended = 'M';
  else if (weight < 92) recommended = 'L';
  else recommended = 'XL';

  // Very tall lifters get one size up for length (max XL)
  const order = ['S', 'M', 'L', 'XL'];
  if (height >= 190 && recommended !== 'XL') recommended = order[order.indexOf(recommended) + 1];

  document.getElementById('calcRecommendedSize').textContent = recommended;
  document.getElementById('calcAdviceText').innerHTML =
    `Pentru ${height} cm și ${weight} kg recomandăm <span class="text-white">${recommended}</span>. Dacă vrei un fit mai larg, alege o mărime în plus.`;
  resultContainer.classList.remove('hidden');
}

// ---------- Checkout ----------
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Coșul este gol', 'error');
    return;
  }
  closeCartDrawer();
  populateCountiesSelect();
  updateCheckoutSummary();
  document.getElementById('checkoutModal').classList.add('active');
  lockScroll(true);
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
  lockScroll(false);
}

function populateCountiesSelect() {
  const select = document.getElementById('checkoutCounty');
  if (!select || select.options.length > 1) return;
  select.innerHTML = `<option value="">Alege județul</option>` +
    ROMANIAN_COUNTIES.map(c => `<option value="${c}">${c}</option>`).join('');
}

function updateCheckoutSummary() {
  const t = computeTotals();
  const list = document.getElementById('checkoutItemsList');
  if (list) {
    list.innerHTML = state.cart.map(item => `
      <div class="flex justify-between text-sm py-1.5">
        <span class="text-zinc-300">${item.quantity} × ${item.title} <span class="text-zinc-500">(${item.size})</span></span>
        <span class="text-white">${formatPrice(item.priceRon * item.quantity)}</span>
      </div>
    `).join('');
  }
  const method = document.querySelector('input[name="shippingMethod"]:checked')?.value || 'easybox';
  const addrLabel = document.getElementById('checkoutAddressLabel');
  const addrInput = document.getElementById('checkoutAddress');
  const countySelect = document.getElementById('checkoutCounty');
  const cityInput = document.getElementById('checkoutCity');
  const mapBtn = document.getElementById('openEasyboxMapBtn');
  const extLink = document.getElementById('easyboxExternalLink');
  if (method === 'brasov') {
    if (addrLabel) addrLabel.textContent = 'Adresă sau zonă de predare în Brașov';
    if (addrInput) addrInput.placeholder = 'ex. Strada / cartierul din Brașov';
    if (countySelect) countySelect.value = 'Brașov';
    if (cityInput && !cityInput.value) cityInput.value = 'Brașov';
    if (mapBtn) mapBtn.classList.add('hidden');
    if (extLink) extLink.classList.add('hidden');
  } else {
    if (addrLabel) addrLabel.textContent = 'Locker Sameday Easybox';
    if (addrInput) addrInput.placeholder = 'Alege de pe hartă sau scrie numele lockerului';
    if (mapBtn) mapBtn.classList.remove('hidden');
    if (extLink) extLink.classList.remove('hidden');
  }
  document.getElementById('checkoutSubtotal').textContent = formatPrice(t.afterDiscount);
  document.getElementById('checkoutShipping').textContent = 'Inclusă';
  document.getElementById('checkoutTotal').textContent = formatPrice(t.total);
}

// ---------- Harta Interactivă Sameday Easybox (România) ----------
let easyboxMapInstance = null;
let easyboxMarkersLayer = null;
let currentEasyboxResults = [];

function normalizeRoText(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function initEasyboxLeafletMap() {
  if (easyboxMapInstance || typeof L === 'undefined') return;

  easyboxMapInstance = L.map('easyboxLeafletMap', {
    center: [45.85, 24.97], // Centrul României
    zoom: 7,
    zoomControl: true
  });

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; OpenStreetMap &copy; Esri',
    maxZoom: 19
  }).addTo(easyboxMapInstance);

  easyboxMarkersLayer = L.layerGroup().addTo(easyboxMapInstance);
}

function openSamedayLockerMap() {
  const modal = document.getElementById('easyboxMapModal');
  if (!modal) return;

  modal.classList.add('active');

  const cityVal = document.getElementById('checkoutCity')?.value.trim() || '';
  const countyVal = document.getElementById('checkoutCounty')?.value.trim() || '';
  const searchInput = document.getElementById('easyboxSearchInput');

  const initialQuery = cityVal || countyVal || '';
  if (searchInput) searchInput.value = initialQuery;

  setTimeout(() => {
    initEasyboxLeafletMap();
    if (easyboxMapInstance) {
      easyboxMapInstance.invalidateSize();
    }
    if (initialQuery) {
      searchEasyboxMap(initialQuery);
    } else {
      resetEasyboxMapToRomania();
    }
  }, 80);
}

function closeEasyboxMapModal() {
  document.getElementById('easyboxMapModal')?.classList.remove('active');
}

function resetEasyboxMapToRomania() {
  const searchInput = document.getElementById('easyboxSearchInput');
  if (searchInput) searchInput.value = '';
  const allLockers = typeof EASYBOX_LOCKERS !== 'undefined' ? EASYBOX_LOCKERS : [];
  renderEasyboxMarkersAndList(allLockers, false);
  if (easyboxMapInstance) {
    easyboxMapInstance.setView([45.85, 24.97], 7);
  }
}

async function searchEasyboxMap(customQuery) {
  const searchInput = document.getElementById('easyboxSearchInput');
  const rawQuery = (typeof customQuery === 'string' ? customQuery : (searchInput?.value || '')).trim();
  const allLockers = typeof EASYBOX_LOCKERS !== 'undefined' ? EASYBOX_LOCKERS : [];

  if (!rawQuery) {
    resetEasyboxMapToRomania();
    return;
  }

  const qNorm = normalizeRoText(rawQuery);
  let matches = allLockers.filter(l => {
    const hay = normalizeRoText(`${l.name} ${l.address} ${l.city} ${l.county}`);
    return hay.includes(qNorm);
  });

  // Căutare live suplimentară în OpenStreetMap Nominatim pentru orice oraș / stradă din România
  try {
    const countEl = document.getElementById('easyboxResultsCount');
    if (countEl) countEl.textContent = 'Se caută lockere...';

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent('easybox ' + rawQuery)}&countrycodes=ro&format=jsonv2&addressdetails=1&limit=35`;
    const res = await fetch(url, { headers: { 'Accept-Language': 'ro' } });
    if (res.ok) {
      const osmItems = await res.json();
      const seenCoords = new Set(matches.map(m => `${m.lat.toFixed(3)}_${m.lon.toFixed(3)}`));

      osmItems.forEach(it => {
        const lat = parseFloat(it.lat);
        const lon = parseFloat(it.lon);
        if (isNaN(lat) || isNaN(lon)) return;
        const key = `${lat.toFixed(3)}_${lon.toFixed(3)}`;
        if (seenCoords.has(key)) return;
        seenCoords.add(key);

        const addr = it.address || {};
        const city = addr.city || addr.town || addr.village || addr.municipality || rawQuery;
        const county = (addr.county || '').replace(/^Județul\s+/i, '').replace(/\s+County$/i, '') || city;
        const road = [addr.road, addr.house_number].filter(Boolean).join(' nr. ');
        const sub = addr.suburb || addr.neighbourhood || '';
        const fullAddr = [road, sub, city].filter(Boolean).join(', ');
        let name = (it.name || '').trim();
        if (!name || name.toLowerCase() === 'easybox' || name.toLowerCase() === 'sameday easybox') {
          name = road ? `Easybox ${road}` : `Easybox ${sub || city}`;
        } else if (!name.toLowerCase().includes('easybox')) {
          name = `Easybox ${name}`;
        }

        matches.push({ name, address: fullAddr || city, city, county, lat, lon });
      });
    }
  } catch (_) {}

  renderEasyboxMarkersAndList(matches, true);

  // Dacă utilizatorul a căutat un oraș mic unde nu sunt pini indexați, centrăm harta pe oraș
  if (matches.length === 0 && easyboxMapInstance) {
    try {
      const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(rawQuery + ', Romania')}&countrycodes=ro&format=jsonv2&limit=1`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();
      if (geoData && geoData[0]) {
        easyboxMapInstance.setView([parseFloat(geoData[0].lat), parseFloat(geoData[0].lon)], 13);
      }
    } catch (_) {}
  }
}

function renderEasyboxMarkersAndList(lockers, fitBoundsToResults) {
  currentEasyboxResults = lockers;
  const listEl = document.getElementById('easyboxListContainer');
  const countEl = document.getElementById('easyboxResultsCount');

  if (countEl) {
    countEl.textContent = `${lockers.length} lockere Easybox găsite`;
  }

  if (easyboxMarkersLayer) {
    easyboxMarkersLayer.clearLayers();
  }

  const pinIcon = typeof L !== 'undefined' ? L.divIcon({
    className: '',
    html: '<div class="easybox-pin"></div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  }) : null;

  const bounds = [];

  lockers.forEach((locker, idx) => {
    if (easyboxMarkersLayer && pinIcon) {
      const marker = L.marker([locker.lat, locker.lon], { icon: pinIcon });
      const popupHtml = `
        <div class="min-w-[210px]">
          <div class="text-xs font-semibold uppercase tracking-wider text-red-400">Sameday Easybox</div>
          <div class="text-sm font-medium text-white mt-0.5">${locker.name}</div>
          <div class="text-xs text-zinc-400 mt-1">${locker.address}</div>
          <button
            type="button"
            onclick="selectEasyboxByIndex(${idx})"
            class="mt-3 w-full h-9 bg-white text-black text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-zinc-200 transition"
          >
            Alege acest Easybox
          </button>
        </div>
      `;
      marker.bindPopup(popupHtml);
      easyboxMarkersLayer.addLayer(marker);
      bounds.push([locker.lat, locker.lon]);
    }
  });

  if (fitBoundsToResults && easyboxMapInstance && bounds.length > 0) {
    if (bounds.length === 1) {
      easyboxMapInstance.setView(bounds[0], 15);
    } else {
      easyboxMapInstance.fitBounds(bounds, { padding: [35, 35], maxZoom: 15 });
    }
  }

  if (!listEl) return;

  if (lockers.length === 0) {
    listEl.innerHTML = `
      <div class="p-6 text-center text-xs text-zinc-400 space-y-3">
        <p>Nu am găsit un locker exact cu acest nume pe hartă.</p>
        <p class="text-zinc-500">Poți încerca să cauți doar numele orașului (ex: Brașov, Sibiu, Cluj) sau poți scrie manual numele lockerului în câmpul din formular.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = lockers.slice(0, 120).map((locker, idx) => `
    <div class="p-3.5 hover:bg-[#141416] transition flex items-start justify-between gap-3">
      <button type="button" onclick="focusEasyboxOnMap(${idx})" class="text-left flex-1 min-w-0">
        <div class="text-xs font-medium text-white truncate">${locker.name}</div>
        <div class="text-[11px] text-zinc-400 truncate mt-0.5">${locker.address}</div>
        <div class="text-[10px] text-zinc-500 mt-0.5">${locker.city} · jud. ${locker.county}</div>
      </button>
      <button
        type="button"
        onclick="selectEasyboxByIndex(${idx})"
        class="flex-shrink-0 h-8 px-3 border border-[#2a2a30] hover:border-white hover:bg-white hover:text-black text-white text-[11px] font-medium uppercase tracking-wider transition"
      >
        Alege
      </button>
    </div>
  `).join('');
}

function focusEasyboxOnMap(idx) {
  const locker = currentEasyboxResults[idx];
  if (!locker || !easyboxMapInstance) return;
  easyboxMapInstance.setView([locker.lat, locker.lon], 16);
  if (easyboxMarkersLayer) {
    easyboxMarkersLayer.eachLayer(layer => {
      const pos = layer.getLatLng();
      if (Math.abs(pos.lat - locker.lat) < 0.0001 && Math.abs(pos.lng - locker.lon) < 0.0001) {
        layer.openPopup();
      }
    });
  }
}

function selectEasyboxByIndex(idx) {
  const locker = currentEasyboxResults[idx];
  if (!locker) return;

  const countySelect = document.getElementById('checkoutCounty');
  const cityInput = document.getElementById('checkoutCity');
  const addrInput = document.getElementById('checkoutAddress');

  if (locker.county && countySelect) {
    const match = ROMANIAN_COUNTIES.find(c =>
      normalizeRoText(c) === normalizeRoText(locker.county) ||
      normalizeRoText(locker.county).includes(normalizeRoText(c))
    );
    if (match) countySelect.value = match;
  }

  if (locker.city && cityInput) {
    cityInput.value = locker.city;
  }

  if (addrInput) {
    addrInput.value = `${locker.name} — ${locker.address}`;
  }

  closeEasyboxMapModal();
  showToast(`Selectat: ${locker.name}`);
}

function processCheckoutOrder(e) {
  e.preventDefault();

  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const email = document.getElementById('checkoutEmail').value.trim();
  const county = document.getElementById('checkoutCounty').value;
  const city = document.getElementById('checkoutCity').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const method = document.querySelector('input[name="shippingMethod"]:checked')?.value || 'easybox';
  const methodLabel = method === 'brasov' ? 'Livrare personală în Brașov' : 'Sameday Easybox';

  const t = computeTotals();
  const orderNumber = 'PL-' + Math.floor(100000 + Math.random() * 900000);
  const itemsText = state.cart.map(i => `${i.quantity}x ${i.title} (Mărime: ${i.size}) — ${formatPrice(i.priceRon * i.quantity)}`).join('\n');

  // Trimite detaliile comenzii către purelift.brand@gmail.com
  fetch('https://formsubmit.co/ajax/purelift.brand@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: `Comandă nouă PURELIFT ${orderNumber} — ${name} (${methodLabel})`,
      Comanda: orderNumber,
      Client: name,
      Telefon: phone,
      Email_Client: email,
      Metoda_Livrare: methodLabel,
      Judet: county,
      Localitate: city,
      Locker_sau_Adresa: address,
      Produse: itemsText,
      Total: formatPrice(t.total)
    })
  }).catch(() => {});

  state.cart = [];
  state.discountPercent = 0;
  saveCart();
  closeCheckoutModal();

  document.getElementById('confirmOrderNumber').textContent = orderNumber;
  document.getElementById('confirmCustomerName').textContent = name;
  document.getElementById('confirmDeliveryAddress').textContent = `${methodLabel} · ${address}, ${city}, jud. ${county}`;
  document.getElementById('confirmOrderTotal').textContent = formatPrice(t.total);
  document.getElementById('orderConfirmationModal').classList.add('active');
  lockScroll(true);
}

function closeOrderConfirmation() {
  document.getElementById('orderConfirmationModal').classList.remove('active');
  lockScroll(false);
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  renderCartDrawer();

  document.querySelectorAll('input[name="shippingMethod"]').forEach(input => {
    input.addEventListener('change', updateCheckoutSummary);
  });

  // Esc closes whatever is open
  document.addEventListener('keydown', ev => {
    if (ev.key !== 'Escape') return;
    const mapModal = document.getElementById('easyboxMapModal');
    if (mapModal && mapModal.classList.contains('active')) {
      closeEasyboxMapModal();
      return;
    }
    closeSizeCalculatorModal();
    closeQuickView();
    closeCheckoutModal();
    closeCartDrawer();
  });
});
