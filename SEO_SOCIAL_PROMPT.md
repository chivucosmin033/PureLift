# BRIEF: SEO + social preview pentru purelift-v2

Proiect: `C:\Users\chivu\OneDrive\Desktop\purelift-v2` (site static, publicat pe https://www.purelift.fit/)
Fișier principal: `index.html`. Secundare: `termeni.html`, `confidentialitate.html`.

## REGULA #1 — nu se schimbă nimic vizibil

Atingi **exclusiv conținutul din `<head>`** al celor 3 fișiere HTML, plus creezi 3 fișiere noi.
Interzis: modificări în `<body>`, în `style.css`, în `app.js`, în `products.js`, redenumiri de fișiere,
reformatarea HTML-ului existent, schimbarea de text/imagini/culori/structură.
Nu rula build de Tailwind, nu instala pachete npm. Fișierele rămân pregătite pentru upload manual pe GitHub Pages.

Singura creștere acceptată: liniile noi din `<head>` (max ~130 linii în total în `index.html`, din JSON-LD).

## 1. `index.html` — tag-uri noi în `<head>` (după `<meta name="theme-color">`)

Adaugă exact asta (păstrează ce există, doar completează; `og:image` existent se ÎNLOCUIEȘTE):

```html
<link rel="canonical" href="https://www.purelift.fit/" />
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/favicon.png" />

<!-- Open Graph / social preview -->
<meta property="og:site_name" content="PURELIFT" />
<meta property="og:locale" content="ro_RO" />
<meta property="og:url" content="https://www.purelift.fit/" />
<meta property="og:title" content="PURELIFT · Tricouri grele pentru sală" />
<meta property="og:description" content="Tricouri din bumbac greu de 203 g/m², croială minimalistă. 80 lei, transport inclus prin Sameday Easybox." />
<meta property="og:image" content="https://www.purelift.fit/hero-lifters.jpg" />
<meta property="og:image:secure_url" content="https://www.purelift.fit/hero-lifters.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1920" />
<meta property="og:image:height" content="1072" />
<meta property="og:image:alt" content="Tricou negru PURELIFT purtat la sală" />
<meta property="og:type" content="website" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PURELIFT · Tricouri grele pentru sală" />
<meta name="twitter:description" content="Tricouri din bumbac greu de 203 g/m². 80 lei, transport inclus." />
<meta name="twitter:image" content="https://www.purelift.fit/hero-lifters.jpg" />
```

## 2. `index.html` — JSON-LD (înainte de `</head>`)

Un singur `<script type="application/ld+json">` care conține un `@graph` cu 3 entități:
`Organization`, `WebSite` și `ItemList` cu cele 3 produse (fiecare `Product` + `Offer`).

Valori obligatorii, luate din `products.js` (NU inventa cifre noi):
- 3 produse, `id`: pl-01, pl-02, pl-03; nume: „Wordmark Tee”, „Emblem Tee”, „Signature Tee”
  (numele comercial + `alternateName` cu denumirea din `products.js`).
- `brand`: PURELIFT; `price`: "80"; `priceCurrency`: "RON"; `availability`: "https://schema.org/InStock".
- `image`: URL absolut către `wordmark-front.jpg`, `emblem-front.jpg`, `signature-front.jpg`.
- `url`: `https://www.purelift.fit/#catalog`.
- `material`: „100% bumbac, 203 g/m²” (nu schimba specificația).
- Organization: name PURELIFT, url `https://www.purelift.fit/`, logo `https://www.purelift.fit/favicon.png`,
  email `purelift.brand@gmail.com`, sameAs `https://www.instagram.com/_purelift_/`.

JSON-LD trebuie să fie JSON valid (verifică-l, vezi §5). Zero HTML în interiorul lui.

## 3. Fișiere noi

**`robots.txt`**
```
User-agent: *
Allow: /

Sitemap: https://www.purelift.fit/sitemap.xml
```

**`sitemap.xml`** — 3 URL-uri, `lastmod` = 2026-11-07:
- `https://www.purelift.fit/` (priority 1.0)
- `https://www.purelift.fit/termeni.html` (priority 0.3)
- `https://www.purelift.fit/confidentialitate.html` (priority 0.3)
XML valid, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`.

**`favicon.ico`** — generează-l din `favicon.png` (64×64 RGBA) cu PIL, dimensiuni 16/32/48:
```python
from PIL import Image
Image.open("favicon.png").convert("RGBA").save("favicon.ico", sizes=[(16,16),(32,32),(48,48)])
```
Nu suprascrie `favicon.png` (rămâne folosit de `apple-touch-icon`).

## 4. `termeni.html` și `confidentialitate.html`

Doar în `<head>`, dacă lipsesc: `<title>` descriptiv, `<meta name="description">`,
`<link rel="canonical">` cu URL-ul absolut al paginii. Nimic altceva. Fără JSON-LD aici.

## 5. Definition of done — verifică singur înainte să raportezi

Rulează și lipește rezultatul în răspuns:

```bash
python -c "import json,re,io;h=open('index.html',encoding='utf-8').read();m=re.search(r'<script type=\"application/ld\+json\">(.*?)</script>',h,re.S);json.loads(m.group(1));print('JSON-LD OK')"
python -c "import xml.dom.minidom as m;m.parse('sitemap.xml');print('sitemap OK')"
grep -c 'og:image' index.html
ls -l robots.txt sitemap.xml favicon.ico
git diff --stat 2>/dev/null || true
```

Criterii:
1. `JSON-LD OK` și `sitemap OK`.
2. `grep -c 'og:image'` returnează cel puțin 4 (image, secure_url, width/height nu se numără — minim: og:image, og:image:secure_url, og:image:width, og:image:height, og:image:type, og:image:alt).
3. `favicon.ico` există, > 0 bytes, și `python -c "from PIL import Image;Image.open('favicon.ico');print('ico OK')"` trece.
4. `index.html` conține `rel="canonical"`, `og:url`, `twitter:card`.
5. **Niciun tag nou nu conține URL relativ** pentru `og:*` (toate încep cu `https://www.purelift.fit/`).
6. Numărul de linii din `index.html` crește cu cel mult 130 (era 619).

## 6. Raport final

Spune, în maximum 10 rânduri: ce fișiere ai atins, câte linii ai adăugat în fiecare,
rezultatul celor 6 criterii, și confirmă explicit: „nu am modificat nimic vizibil în `<body>`, CSS sau JS”.
Dacă un criteriu nu trece, spune-l direct — nu îl declara îndeplinit.
