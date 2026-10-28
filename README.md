# PURELIFT — Made for Lifters

Magazin online minimalist de echipament sportiv pentru sală (**PURELIFT · Drop 01**).  
Construit ca site static rapid (HTML5, Tailwind CSS, JavaScript vanilla, Leaflet.js), 100% compatibil cu **GitHub Pages**, **Netlify** sau **Vercel**.

---

## Caracteristici principale

- **Colecția Drop 01 (3 modele · 80 lei cu transport inclus):**
  - Bumbac greu `203 g/m²` (100% bumbac filat cu inele), guler și umeri întăriți cu bandă, corp tubular fără cusături laterale.
  - Previzualizare față/spate la hover și în fereastra *Quick View*.
- **Ghid și Calculator de mărimi (`S` – `XL`):**
  - Recomandare rapidă în funcție de înălțime și greutate + tabel tehnic în centimetri.
- **Coș de cumpărături & Checkout integrat:**
  - **Sameday Easybox (România)** cu **hartă interactivă integrată** (căutare după oraș, cartier sau stradă și selectare cu un click).
  - **Livrare în Brașov** (predare / livrare în oraș).
  - **Plată la ridicarea coletului** (cu cardul direct la POS-ul lockerului Easybox sau la primire în Brașov).
  - Trimitere automată a comenzilor pe email către `purelift.brand@gmail.com`.

---

## Structura proiectului

```text
purelift-v2/
├── index.html                  # Pagina principală a magazinului
├── termeni.html                # Termeni și condiții
├── confidentialitate.html      # Politica de confidențialitate (GDPR)
├── .nojekyll                   # Dezactivează procesarea Jekyll pe GitHub Pages
├── README.md                   # Documentația proiectului
└── assets/
    ├── css/
    │   └── style.css           # Temă dark minimalistă & stilizare hartă
    ├── js/
    │   ├── products.js         # Datele celor 3 tricouri din colecție
    │   ├── easybox-lockers.js  # Lockerele Sameday Easybox din România
    │   └── app.js              # Coș, calculator mărimi, hartă Easybox și checkout
    └── images/
        ├── hero-lifters.jpg    # Imaginea principală Hero
        ├── favicon.png         # Pictograma site-ului (favicon)
        └── products/           # Fotografiile de produs (față + spate)
```

---

## Cum îl publici gratuit pe GitHub Pages

1. Creează un repository nou pe GitHub (ex. `purelift`).
2. Încarcă toate fișierele din folderul `purelift-v2` în repository (`index.html`, `termeni.html`, `confidentialitate.html`, `README.md`, `.nojekyll` și folderul `assets/`).
3. În repository-ul de pe GitHub, intră la **Settings → Pages**.
4. La **Build and deployment → Source**, alege **Deploy from a branch**, selectează branch-ul `main` și folderul `/ (root)`, apoi apasă **Save**.
5. La prima comandă plasată pe site-ul live, deschide emailul primit de la **FormSubmit** pe `purelift.brand@gmail.com` și apasă pe butonul **Activate Form** pentru a activa primirea automată a tuturor comenzilor viitoare.

---

## Contact

- **Email:** [purelift.brand@gmail.com](mailto:purelift.brand@gmail.com)
- **Instagram:** [@_purelift_](https://www.instagram.com/_purelift_/)
