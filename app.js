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
  "Brașov", "București", "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brăila",
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
        <button
          type="button"
          onclick="toggleMobileCardImage(event, this)"
          class="md:hidden absolute bottom-2.5 right-2.5 z-10 px-2.5 py-1 bg-[#0a0a0b]/80 backdrop-blur-sm border border-[#2a2a30] text-[11px] text-zinc-300 uppercase tracking-wider"
        >
          Spate
        </button>
      </div>

      <div class="pt-3.5 sm:pt-4 flex flex-col flex-1 gap-3.5 sm:gap-4">
        <div class="flex items-center justify-between gap-4">
          <p class="text-sm text-zinc-300 sm:text-zinc-400 cursor-pointer hover:text-white transition" onclick="openQuickView('${product.id}')">${product.subtitle}</p>
          <span class="text-[15px] font-medium text-white whitespace-nowrap">${formatPrice(product.priceRon)}</span>
        </div>

        <div class="mt-auto space-y-2.5 sm:space-y-3">
          <div class="flex gap-1.5" id="size-pill-container-${product.id}">
            ${product.sizes.map(s => `
              <button type="button" ${s.stock === 0 ? 'disabled' : ''}
                onclick="selectQuickSize('${product.id}', '${s.size}')"
                id="size-btn-${product.id}-${s.size}"
                class="size-btn h-10 sm:h-9 flex-1 text-xs font-medium border transition ${s.stock === 0 ? 'border-[#1f1f23] text-zinc-700 line-through cursor-not-allowed' : 'border-[#2a2a30] text-zinc-300 hover:border-white hover:text-white'}">
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

function toggleMobileCardImage(event, btn) {
  event.stopPropagation();
  const container = btn.closest('.product-image-container');
  if (!container) return;
  const showingBack = container.classList.toggle('show-back');
  btn.textContent = showingBack ? 'Față' : 'Spate';
}

const selectedSizes = {};

function selectQuickSize(productId, size) {
  selectedSizes[productId] = size;
  const container = document.getElementById(`size-pill-container-${productId}`);
  if (!container) return;
  container.querySelectorAll('.size-btn:not([disabled])').forEach(btn => {
    btn.classList.remove('bg-white', 'text-black', 'border-white');
    btn.classList.add('border-[#2a2a30]', 'text-zinc-300', 'hover:text-white', 'hover:border-white');
  });
  const active = document.getElementById(`size-btn-${productId}-${size}`);
  if (active) {
    active.classList.remove('border-[#2a2a30]', 'text-zinc-300', 'hover:text-white', 'hover:border-white');
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
    document.getElementById('cartDiscount').textContent = `-${formatPrice(t.discount)}`;
  } else {
    discountRow.classList.add('hidden');
  }

  document.getElementById('cartTotal').textContent = formatPrice(t.total);
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  const msg = document.getElementById('promoMessage');
  const code = input.value.trim().toUpperCase();

  msg.classList.remove('hidden', 'text-white', 'text-red-400');

  if (code === 'LIFT10' || code === 'PURE10') {
    state.discountPercent = 10;
    msg.textContent = 'Reducere de 10% aplicată.';
    msg.classList.add('text-white');
    renderCartDrawer();
  } else if (code === 'PUMP15') {
    state.discountPercent = 15;
    msg.textContent = 'Reducere de 15% aplicată.';
    msg.classList.add('text-white');
    renderCartDrawer();
  } else {
    state.discountPercent = 0;
    msg.textContent = 'Cod invalid.';
    msg.classList.add('text-red-400');
    renderCartDrawer();
  }
  msg.className = `block text-xs mt-2 ${state.discountPercent > 0 ? 'text-white' : 'text-red-400'}`;
}

function lockScroll(lock) {
  document.body.style.overflow = lock ? 'hidden' : '';
}

function openCartDrawer() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartDrawerBackdrop')?.classList.add('active');
  lockScroll(true);
}

function closeCartDrawer() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('cartDrawerBackdrop')?.classList.remove('active');
  lockScroll(false);
}

// ---------- Quick view modal ----------
let activeModalSelectedSize = null;

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const firstAvailable = product.sizes.find(s => s.stock > 0);
  activeModalSelectedSize = firstAvailable ? firstAvailable.size : null;

  const content = document.getElementById('quickViewContent');
  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div>
        <div class="aspect-square bg-[#141416] overflow-hidden">
          <img id="modalMainImg" src="${product.image}" alt="${product.title}" class="w-full h-full object-cover" />
        </div>
        <div class="flex gap-2 mt-3">
          <button type="button" onclick="setModalImage(this, '${product.image}')" class="modal-thumb w-16 h-16 border border-white overflow-hidden">
            <img src="${product.image}" alt="Față" class="w-full h-full object-cover" />
          </button>
          <button type="button" onclick="setModalImage(this, '${product.backImage}')" class="modal-thumb w-16 h-16 border border-[#2a2a30] opacity-60 hover:opacity-100 overflow-hidden">
            <img src="${product.backImage}" alt="Spate" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-xs text-zinc-500">${product.subtitle}</div>
        <div class="text-xl sm:text-2xl font-medium text-white mt-1">${formatPrice(product.priceRon)}</div>

        <p class="text-sm text-zinc-400 leading-relaxed mt-4 sm:mt-5">${product.description}</p>

        <ul class="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-[#1f1f23] space-y-2 text-xs text-zinc-400">
          ${product.specs.map(spec => `<li class="flex gap-2"><span class="text-zinc-600">—</span><span>${spec}</span></li>`).join('')}
        </ul>

        <div class="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#1f1f23]">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-zinc-400">Mărime</span>
            <button type="button" onclick="closeQuickView(); openSizeCalculatorModal()" class="text-xs text-zinc-400 hover:text-white underline underline-offset-4">
              Tabel mărimi
            </button>
          </div>
          <div class="grid grid-cols-4 gap-2">
            ${product.sizes.map(s => `
              <button id="modal-size-btn-${s.size}" ${s.stock === 0 ? 'disabled' : ''}
                onclick="selectModalSize('${s.size}')"
                class="modal-size-btn h-11 text-sm border transition ${s.stock === 0 ? 'border-[#1f1f23] text-zinc-700 line-through cursor-not-allowed' : s.size === activeModalSelectedSize ? 'border-white bg-white text-black' : 'border-[#2a2a30] text-zinc-200 hover:border-white'}">
                ${s.size}
              </button>
            `).join('')}
          </div>
        </div>

        <button onclick="addModalProductToCart('${product.id}')"
          class="mt-6 sm:mt-8 w-full h-12 bg-white text-black text-xs font-semibold uppercase tracking-[0.12em] hover:bg-zinc-200 transition">
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

// ---------- Size calculator (calibrat pe Gildan Hammer 203 g/m² — croială normală puțin spre fit) ----------
const HAMMER_SIZES = [
  { size: 'S',  lengthCm: '71,1', widthCm: '45,7', sleeveCm: '41,3' },
  { size: 'M',  lengthCm: '73,7', widthCm: '50,8', sleeveCm: '45,4' },
  { size: 'L',  lengthCm: '76,2', widthCm: '55,9', sleeveCm: '48,6' },
  { size: 'XL', lengthCm: '78,7', widthCm: '61,0', sleeveCm: '52,4' }
];

function calculateGymSize() {
  const height = parseFloat(document.getElementById('calcHeight').value);
  const weight = parseFloat(document.getElementById('calcWeight').value);
  const resultContainer = document.getElementById('calcResultContainer');

  if (!height || !weight || height < 140 || height > 230 || weight < 40 || weight > 180) {
    showToast('Completează o înălțime (140–220 cm) și o greutate validă', 'error');
    return;
  }

  // Alegem mărimea pe baza dimensiunilor reale Gildan Hammer pentru un fit normal-atletic (puțin spre fit):
  // S (45,7 cm piept · 71,1 cm lungime): sub 68 kg
  // M (50,8 cm piept · 73,7 cm lungime): 68 – 81 kg (ex. 175 cm / 70–80 kg = M)
  // L (55,9 cm piept · 76,2 cm lungime): 82 – 94 kg
  // XL (61,0 cm piept · 78,7 cm lungime): 95+ kg
  let idx = 0;
  if (weight < 68) idx = 0;       // S
  else if (weight < 82) idx = 1;  // M
  else if (weight < 95) idx = 2;  // L
  else idx = 3;                   // XL

  // Corecție de lungime pentru persoane înalte
  if (height >= 182 && idx < 1) idx = 1; // minim M peste 182 cm (73,7 cm lungime)
  if (height >= 188 && idx < 2) idx = 2; // minim L peste 188 cm (76,2 cm lungime)
  if (height >= 194 && idx < 3) idx = 3; // minim XL peste 194 cm (78,7 cm lungime)

  const chosen = HAMMER_SIZES[idx];

  let altNote = '';
  if (weight >= 79 && weight < 82 && idx === 1) {
    altNote = ` Dacă îl preferi mai lejer în umeri, poți alege <span class="text-white font-medium">L</span> (55,9 cm piept).`;
  } else if (weight >= 92 && weight < 95 && idx === 2) {
    altNote = ` Dacă îl preferi mai lejer, poți alege <span class="text-white font-medium">XL</span> (61,0 cm piept).`;
  }

  document.getElementById('calcRecommendedSize').textContent = chosen.size;
  document.getElementById('calcAdviceText').innerHTML =
    `Pentru <span class="text-white">${Math.round(height)} cm</span> și <span class="text-white">${Math.round(weight)} kg</span> recomandăm mărimea <span class="text-white font-semibold">${chosen.size}</span> ` +
    `<span class="text-zinc-300">(${chosen.widthCm} cm piept · ${chosen.lengthCm} cm lungime)</span>.${altNote}`;
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
  if (!select || select.options.length > 0) return;
  select.innerHTML = ROMANIAN_COUNTIES.map(c =>
    `<option value="${c}" ${c === 'Brașov' ? 'selected' : ''}>${c}</option>`
  ).join('');
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
  document.getElementById('checkoutSubtotal').textContent = formatPrice(t.afterDiscount);
  document.getElementById('checkoutShipping').textContent = 'Inclusă';
  document.getElementById('checkoutTotal').textContent = formatPrice(t.total);
}

async function processCheckoutOrder(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('checkoutSubmitBtn');
  const errorBox = document.getElementById('checkoutErrorBox');
  if (errorBox) {
    errorBox.classList.add('hidden');
    errorBox.innerHTML = '';
  }

  const country = document.getElementById('checkoutCountry')?.value || 'România';
  const firstName = document.getElementById('checkoutFirstName').value.trim();
  const lastName = document.getElementById('checkoutLastName').value.trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const apartment = document.getElementById('checkoutApartment')?.value.trim() || '';
  const postalCode = document.getElementById('checkoutPostalCode')?.value.trim() || '';
  const city = document.getElementById('checkoutCity').value.trim();
  const county = document.getElementById('checkoutCounty').value;
  const phone = document.getElementById('checkoutPhone').value.trim();
  const email = document.getElementById('checkoutEmail').value.trim();
  const method = document.querySelector('input[name="shippingMethod"]:checked')?.value || 'easybox';
  const methodLabel = method === 'brasov'
    ? 'Livrare în Brașov'
    : 'Sameday Easybox (cel mai apropiat de adresa clientului)';

  const fullAddressLine = [
    address,
    apartment ? `(${apartment})` : '',
    postalCode ? `CP ${postalCode}` : '',
    city,
    `jud. ${county}`,
    country
  ].filter(Boolean).join(', ');

  const t = computeTotals();
  const orderNumber = 'PL-' + Math.floor(100000 + Math.random() * 900000);
  const itemsText = state.cart.map(i => `${i.quantity}x ${i.title} (Mărime: ${i.size}) — ${formatPrice(i.priceRon * i.quantity)}`).join('\n');

  const payload = {
    _subject: `Comandă nouă PURELIFT ${orderNumber} — ${fullName}`,
    Numar_Comanda: orderNumber,
    Comanda: orderNumber,
    Client: fullName,
    Prenume: firstName,
    Nume_de_familie: lastName,
    Telefon: phone,
    Email: email,
    Email_Client: email,
    Tara: country,
    Adresa: address,
    Apartament_Detalii: apartment || '-',
    Cod_Postal: postalCode || '-',
    Localitate: city,
    Judet: county,
    Metoda_Expediere: methodLabel,
    Produse: itemsText,
    Total: formatPrice(t.total)
  };

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Se trimite comanda...';
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const res = await fetch('https://script.google.com/macros/s/AKfycbxKwpQKBZ5i8OLo_429viX2zbUQM1Qsqzp1GUxRYjRL5yp0tzMqQd5HHRvhemNKsPco1Q/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data || data.ok !== true) throw new Error('Invalid server response');

    // Golim coșul DOAR după confirmarea ok:true de la server
    state.cart = [];
    state.discountPercent = 0;
    saveCart();
    closeCheckoutModal();

    document.getElementById('confirmOrderNumber').textContent = orderNumber;
    document.getElementById('confirmCustomerName').textContent = fullName;
    document.getElementById('confirmDeliveryAddress').textContent = fullAddressLine;
    document.getElementById('confirmOrderTotal').textContent = formatPrice(t.total);
    document.getElementById('orderConfirmationModal').classList.add('active');
    lockScroll(true);
  } catch (err) {
    // Păstrăm coșul și datele din formular intacte și afișăm opțiunile directe de preluare comandă
    const mailBody = encodeURIComponent(
      `Comandă: ${orderNumber}\nClient: ${fullName}\nTelefon: ${phone}\nAdresă: ${fullAddressLine}\nMetodă: ${methodLabel}\n\nProduse:\n${itemsText}\n\nTotal: ${formatPrice(t.total)}`
    );
    const mailHref = `mailto:purelift.brand@gmail.com?subject=${encodeURIComponent(payload._subject)}&body=${mailBody}`;

    if (errorBox) {
      errorBox.innerHTML = `
        <div class="font-medium text-red-300">Comanda nu s-a putut trimite automat (conexiune întreruptă sau server ocupat).</div>
        <div class="text-zinc-300 leading-relaxed">Coșul și datele tale au rămas salvate. Apasă mai jos pe <strong>Încearcă din nou</strong> sau trimite-ne comanda direct cu un click:</div>
        <div class="flex flex-wrap gap-2 pt-1">
          <a href="${mailHref}" class="px-3 py-2 bg-white text-black font-semibold uppercase tracking-wider text-[11px] hover:bg-zinc-200 transition">Trimite pe Email</a>
          <a href="https://www.instagram.com/_purelift_/" target="_blank" rel="noopener" class="px-3 py-2 border border-white text-white font-semibold uppercase tracking-wider text-[11px] hover:bg-white hover:text-black transition">Mesaj pe Instagram @_purelift_</a>
        </div>
      `;
      errorBox.classList.remove('hidden');
    }
    showToast('Eroare la trimitere — încearcă din nou', 'error');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Plasează comanda';
    }
  }
}

function closeOrderConfirmation() {
  document.getElementById('orderConfirmationModal').classList.remove('active');
  lockScroll(false);
}

// ---------- Reviews (minimalist, vizibile pentru toți vizitatorii prin Google Apps Script + cache local) ----------
const REVIEWS_STORAGE_KEY = 'purelift_v2_reviews';
const GAS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxKwpQKBZ5i8OLo_429viX2zbUQM1Qsqzp1GUxRYjRL5yp0tzMqQd5HHRvhemNKsPco1Q/exec';
let selectedReviewRating = 5;
let selectedReviewPhotoDataUrl = '';

function loadCustomerReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomerReviews(list) {
  try {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {}
}

async function fetchSharedReviews() {
  try {
    const res = await fetch(`${GAS_WEBAPP_URL}?action=reviews&t=${Date.now()}`, { method: 'GET' });
    if (!res.ok) return;
    const data = await res.json();
    if (data && Array.isArray(data.reviews)) {
      saveCustomerReviews(data.reviews);
      renderReviews();
    }
  } catch (e) {}
}

async function handleEmailModerationFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const modAction = params.get('mod_action');
    const modId = params.get('id');
    if (!modAction || !modId) return false;

    setTimeout(() => {
      document.getElementById('recenzii')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    showToast('Se actualizează recenzia pe site...');

    await fetch(GAS_WEBAPP_URL + '?action=' + encodeURIComponent(modAction) + '&id=' + encodeURIComponent(modId) + '&t=' + Date.now(), {
      method: 'GET'
    });

    await fetchSharedReviews();

    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname + '#recenzii');
    }

    if (modAction === 'approve') {
      showToast('✓ Recenzia a fost aprobată și este acum vizibilă pe site!');
    } else if (modAction === 'approve_nophoto') {
      showToast('✓ Recenzia a fost aprobată (fără poză) și este vizibilă pe site!');
    } else if (modAction === 'reject' || modAction === 'delete') {
      showToast('✕ Recenzia a fost ștearsă definitiv de pe site.');
    }
    return true;
  } catch (e) {
    showToast('Eroare la procesarea acțiunii — reîncearcă', 'error');
    return false;
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toggleReviewForm() {
  const wrapper = document.getElementById('reviewFormWrapper');
  if (!wrapper) return;
  wrapper.classList.toggle('hidden');
  if (!wrapper.classList.contains('hidden')) {
    document.getElementById('reviewAuthor')?.focus();
  }
}

function selectReviewRating(rating) {
  selectedReviewRating = rating;
  document.querySelectorAll('#reviewStarSelector .review-star-btn').forEach(btn => {
    const star = parseInt(btn.getAttribute('data-star'), 10);
    btn.classList.remove('border-white', 'bg-white', 'text-black', 'border-[#2a2a30]', 'text-zinc-500');
    if (star <= rating) {
      btn.classList.add('border-white', 'bg-white', 'text-black');
    } else {
      btn.classList.add('border-[#2a2a30]', 'text-zinc-500');
    }
  });
  const label = document.getElementById('reviewRatingLabel');
  if (label) label.textContent = `${rating} / 5`;
}

function handleReviewPhotoSelect(event) {
  const file = event.target?.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('Selectează un fișier imagine (JPG / PNG)', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const maxDim = 480;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      selectedReviewPhotoDataUrl = canvas.toDataURL('image/jpeg', 0.72);

      const previewImg = document.getElementById('reviewPhotoPreviewImg');
      const previewWrap = document.getElementById('reviewPhotoPreviewWrap');
      if (previewImg && previewWrap) {
        previewImg.src = selectedReviewPhotoDataUrl;
        previewWrap.classList.remove('hidden');
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function clearReviewPhoto() {
  selectedReviewPhotoDataUrl = '';
  const input = document.getElementById('reviewPhotoInput');
  if (input) input.value = '';
  document.getElementById('reviewPhotoPreviewWrap')?.classList.add('hidden');
}

function openReviewLightbox(idx) {
  const reviews = loadCustomerReviews();
  const item = reviews[idx];
  if (!item || !item.photo) return;
  const img = document.getElementById('reviewLightboxImg');
  const modal = document.getElementById('reviewPhotoLightbox');
  if (img && modal) {
    img.src = item.photo;
    modal.classList.add('active');
    lockScroll(true);
  }
}

function closeReviewLightbox() {
  document.getElementById('reviewPhotoLightbox')?.classList.remove('active');
  lockScroll(false);
}

function renderReviews() {
  const container = document.getElementById('reviewsListContainer');
  const summary = document.getElementById('reviewsSummaryText');
  if (!container) return;

  const reviews = loadCustomerReviews();

  if (reviews.length === 0) {
    if (summary) {
      summary.textContent = 'Păreri lăsate de cei care poartă tricourile la antrenament.';
    }
    container.innerHTML = `
      <div class="border-t border-[#1f1f23] py-10 sm:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p class="text-sm text-white">Nu există încă recenzii publicate.</p>
          <p class="text-xs text-zinc-500 mt-1">Ai comandat deja un tricou PURELIFT? Fii primul care lasă o părere (și o poză) despre material și mărime.</p>
        </div>
        <button type="button" onclick="toggleReviewForm()" class="self-start sm:self-auto text-xs text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition">
          Scrie prima recenzie
        </button>
      </div>
    `;
    return;
  }

  const avg = (reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0) / reviews.length).toFixed(1);
  if (summary) {
    summary.textContent = `Medie ${avg} / 5 · ${reviews.length} ${reviews.length === 1 ? 'recenzie' : 'recenzii'}`;
  }

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 border-t border-[#1f1f23]">
      ${reviews.map((r, idx) => {
        const stars = '★'.repeat(r.rating || 5) + '☆'.repeat(5 - (r.rating || 5));
        const metaParts = [];
        if (r.product) metaParts.push(escapeHtml(r.product));
        if (r.size) metaParts.push(`Mărimea ${escapeHtml(r.size)}`);
        const metaLine = metaParts.join(' · ');
        const colBorder = (idx % 3 !== 2) ? 'md:border-r' : '';
        const photoHtml = r.photo ? `
          <button type="button" onclick="openReviewLightbox(${idx})" class="mt-4 block overflow-hidden border border-[#1f1f23] hover:border-zinc-500 transition group">
            <img src="${r.photo}" alt="Poză recenzie ${escapeHtml(r.author)}" class="w-20 h-24 object-cover group-hover:scale-105 transition duration-300" />
          </button>
        ` : '';
        return `
          <article class="py-6 sm:py-8 md:px-6 first:md:pl-0 border-b ${colBorder} border-[#1f1f23] flex flex-col justify-between gap-5">
            <div>
              <div class="flex items-center justify-between text-xs mb-3">
                <span class="tracking-widest text-white">${stars}</span>
                <span class="text-zinc-600">${escapeHtml(r.date || '')}</span>
              </div>
              <p class="text-sm text-zinc-300 leading-relaxed">${escapeHtml(r.text)}</p>
              ${photoHtml}
            </div>
            <div class="pt-2">
              <div class="text-xs font-medium text-white">${escapeHtml(r.author)}</div>
              ${metaLine ? `<div class="text-[11px] text-zinc-500 mt-0.5">${metaLine}</div>` : ''}
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

async function submitCustomerReview(event) {
  event.preventDefault();
  const author = document.getElementById('reviewAuthor')?.value.trim();
  const product = document.getElementById('reviewProduct')?.value || '';
  const size = document.getElementById('reviewSize')?.value || '';
  const text = document.getElementById('reviewText')?.value.trim();
  const btn = document.getElementById('reviewSubmitBtn');

  if (!author || !text) {
    showToast('Completează numele și recenzia', 'error');
    return;
  }

  const today = new Date().toLocaleDateString('ro-RO', { day: '2-digit', month: 'short', year: 'numeric' });
  const reviewId = 'rev_' + Date.now() + '_' + Math.floor(1000 + Math.random() * 9000);
  const newReview = {
    id: reviewId,
    author,
    product,
    size,
    rating: selectedReviewRating,
    text,
    photo: selectedReviewPhotoDataUrl || '',
    date: today
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Se trimite...';
  }

  try {
    await fetch(GAS_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        _subject: `Recenzie nouă de aprobat PURELIFT (${selectedReviewRating}/5) — ${author}`,
        Tip: 'RECENZIE CLIENT',
        Client: author,
        Evaluare: `${selectedReviewRating} / 5 stele`,
        Model: product || '-',
        Marime: size || '-',
        Recenzie: text,
        Are_Poza: selectedReviewPhotoDataUrl ? 'DA' : 'NU',
        Data: today,
        reviewObj: newReview
      })
    });
    document.getElementById('reviewForm')?.reset();
    clearReviewPhoto();
    selectReviewRating(5);
    document.getElementById('reviewFormWrapper')?.classList.add('hidden');
    showToast('Mulțumim! Recenzia a fost trimisă și va apărea după verificare.');
  } catch (e) {
    showToast('Eroare la trimitere — încearcă din nou', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Publică recenzia';
    }
  }
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderReviews();
  handleEmailModerationFromUrl().then(handled => {
    if (!handled) fetchSharedReviews();
  });
  updateCartBadge();
  renderCartDrawer();

  document.querySelectorAll('input[name="shippingMethod"]').forEach(input => {
    input.addEventListener('change', updateCheckoutSummary);
  });

  // Esc closes whatever is open
  document.addEventListener('keydown', ev => {
    if (ev.key !== 'Escape') return;
    closeSizeCalculatorModal();
    closeQuickView();
    closeCheckoutModal();
    closeCartDrawer();
    closeReviewLightbox();
  });
});
