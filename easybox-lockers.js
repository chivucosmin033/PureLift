// Lockere Sameday Easybox România
const EASYBOX_LOCKERS = [
  {
    "name": "Easybox Coresi Shopping Resort",
    "address": "Str. Zaharia Stancu nr. 1, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6725,
    "lon": 25.6143
  },
  {
    "name": "Easybox AFI Brașov",
    "address": "Bulevardul 15 Noiembrie nr. 78, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6493,
    "lon": 25.6095
  },
  {
    "name": "Easybox Kaufland Bartolomeu",
    "address": "Șoseaua Cristianului nr. 6, Bartolomeu, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6565,
    "lon": 25.5658
  },
  {
    "name": "Easybox Magnolia Răcădău",
    "address": "Str. Crișana nr. 18, Răcădău, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6352,
    "lon": 25.6092
  },
  {
    "name": "Easybox Lidl Calea București",
    "address": "Calea București nr. 109, Dârste, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6274,
    "lon": 25.6456
  },
  {
    "name": "Easybox Carrefour Calea București",
    "address": "Calea București nr. 107, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6295,
    "lon": 25.6412
  },
  {
    "name": "Easybox Piața Sfatului / Mureșenilor",
    "address": "Str. Mureșenilor nr. 14, Centrul Vechi, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6439,
    "lon": 25.5896
  },
  {
    "name": "Easybox Eliana Mall",
    "address": "Str. Bazaltului nr. 2, Bartolomeu, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6612,
    "lon": 25.5614
  },
  {
    "name": "Easybox Urban Plaza",
    "address": "Str. Carpaților nr. 93, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.6359,
    "lon": 25.6311
  },
  {
    "name": "Easybox Sânpetru Subcetate",
    "address": "Str. Republicii, Sânpetru, Brașov",
    "city": "Sânpetru",
    "county": "Brașov",
    "lat": 45.6942,
    "lon": 25.6248
  },
  {
    "name": "Easybox Ghimbav Centru",
    "address": "Str. Lungă, Ghimbav, Brașov",
    "city": "Ghimbav",
    "county": "Brașov",
    "lat": 45.6634,
    "lon": 25.5061
  },
  {
    "name": "Easybox Cristian",
    "address": "Str. Lungă, Cristian, Brașov",
    "city": "Cristian",
    "county": "Brașov",
    "lat": 45.6272,
    "lon": 25.4832
  },
  {
    "name": "Easybox Săcele Electroprecizia",
    "address": "Bulevardul Brașovului, Săcele, Brașov",
    "city": "Săcele",
    "county": "Brașov",
    "lat": 45.6194,
    "lon": 25.6891
  },
  {
    "name": "Easybox Râșnov Centru",
    "address": "Piața Unirii, Râșnov, Brașov",
    "city": "Râșnov",
    "county": "Brașov",
    "lat": 45.5928,
    "lon": 25.4608
  },
  {
    "name": "Easybox Codlea",
    "address": "Str. Lungă, Codlea, Brașov",
    "city": "Codlea",
    "county": "Brașov",
    "lat": 45.6968,
    "lon": 25.4497
  },
  {
    "name": "Easybox Strada 13 Decembrie",
    "address": "Strada 13 Decembrie, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.654655,
    "lon": 25.605066
  },
  {
    "name": "Easybox Strada Zizinului",
    "address": "Strada Zizinului, Est-Zizin, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.648762,
    "lon": 25.646519
  },
  {
    "name": "easybox Saturn 37",
    "address": "Aleea Mercur, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.63878,
    "lon": 25.636959
  },
  {
    "name": "Easybox Strada Lalelelor",
    "address": "Strada Lalelelor, Florilor-Craiter, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.653569,
    "lon": 25.62588
  },
  {
    "name": "Easybox Strada Lebedei",
    "address": "Strada Lebedei, Bartolomeu Nord, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.667051,
    "lon": 25.559813
  },
  {
    "name": "Easybox Strada Emanoil Bernfeld",
    "address": "Strada Emanoil Bernfeld, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.670325,
    "lon": 25.605986
  },
  {
    "name": "Easybox Strada Ionescu Crum",
    "address": "Strada Ionescu Crum, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.635402,
    "lon": 25.638426
  },
  {
    "name": "Easybox Strada Turnului",
    "address": "Strada Turnului, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.666038,
    "lon": 25.610543
  },
  {
    "name": "Easybox Calea București",
    "address": "Calea București, Noua-Dârste, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.632627,
    "lon": 25.634972
  },
  {
    "name": "Easybox Strada George Bacovia",
    "address": "Strada George Bacovia, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.680333,
    "lon": 25.609243
  },
  {
    "name": "Easybox Stația RAT Saturn",
    "address": "Stația RAT Saturn, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.634044,
    "lon": 25.635804
  },
  {
    "name": "Easybox Strada Hărmanului",
    "address": "Strada Hărmanului, Scriitorilor, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.654774,
    "lon": 25.616857
  },
  {
    "name": "Easybox Strada Avram Iancu",
    "address": "Strada Avram Iancu, Brașovechi, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.663462,
    "lon": 25.583152
  },
  {
    "name": "Easybox Strada Plopilor",
    "address": "Strada Plopilor, Noua-Dârste, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.617398,
    "lon": 25.630283
  },
  {
    "name": "Easybox Strada Reconstrucției",
    "address": "Strada Reconstrucției, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.66491,
    "lon": 25.605854
  },
  {
    "name": "Easybox Strada Ion C. Brătianu",
    "address": "Strada Ion C. Brătianu, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.677055,
    "lon": 25.612622
  },
  {
    "name": "Easybox Strada Prunului",
    "address": "Strada Prunului, Noua-Dârste, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.623417,
    "lon": 25.635799
  },
  {
    "name": "Easybox Bulevardul Gării",
    "address": "Bulevardul Gării, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.660093,
    "lon": 25.607902
  },
  {
    "name": "Easybox Strada Popa Șapcă",
    "address": "Strada Popa Șapcă, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.64927,
    "lon": 25.620156
  },
  {
    "name": "Easybox Bulevardul Griviței",
    "address": "Bulevardul Griviței, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.663151,
    "lon": 25.59342
  },
  {
    "name": "Easybox Strada Codrii Cosminului",
    "address": "Strada Codrii Cosminului, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.662336,
    "lon": 25.600564
  },
  {
    "name": "Easybox Bulevardul 15 Noiembrie",
    "address": "Bulevardul 15 Noiembrie, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.647464,
    "lon": 25.603404
  },
  {
    "name": "Easybox Strada Toamnei",
    "address": "Strada Toamnei, Scriitorilor, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.651785,
    "lon": 25.616266
  },
  {
    "name": "Easybox Strada Ioan Popasu",
    "address": "Strada Ioan Popasu, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.674737,
    "lon": 25.607303
  },
  {
    "name": "Easybox Strada Argintului",
    "address": "Strada Argintului, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.668627,
    "lon": 25.595778
  },
  {
    "name": "Easybox Strada Fabricii",
    "address": "Strada Fabricii, Bartolomeu, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.65838,
    "lon": 25.589078
  },
  {
    "name": "Easybox Strada 1 Decembrie 1918",
    "address": "Strada 1 Decembrie 1918, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.666066,
    "lon": 25.598754
  },
  {
    "name": "Easybox Strada Alexandru cel Bun",
    "address": "Strada Alexandru cel Bun, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.645257,
    "lon": 25.619397
  },
  {
    "name": "Easybox Strada Vasile Goldiș",
    "address": "Strada Vasile Goldiș, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.683262,
    "lon": 25.615534
  },
  {
    "name": "Easybox Strada Ioan Popasu",
    "address": "Strada Ioan Popasu, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.674942,
    "lon": 25.603036
  },
  {
    "name": "Easybox Strada Carpaților",
    "address": "Strada Carpaților, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.632869,
    "lon": 25.627859
  },
  {
    "name": "Easybox Thomas Aparments",
    "address": "Strada Ștefan Baciu, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.673001,
    "lon": 25.606997
  },
  {
    "name": "Easybox Strada Egretei",
    "address": "Strada Egretei, Bartolomeu Nord, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.664284,
    "lon": 25.557571
  },
  {
    "name": "Easybox Strada Cărămidăriei",
    "address": "Strada Cărămidăriei, Bartolomeu, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.659297,
    "lon": 25.561416
  },
  {
    "name": "Easybox Strada Aurel Vlaicu",
    "address": "Strada Aurel Vlaicu, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.660063,
    "lon": 25.595712
  },
  {
    "name": "Easybox Pistă de biciclete - Bd. Iuliu Maniu",
    "address": "Pistă de biciclete - Bd. Iuliu Maniu, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.650705,
    "lon": 25.605367
  },
  {
    "name": "Easybox Strada Grigore Ureche",
    "address": "Strada Grigore Ureche, Bartolomeu Nord, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.66745,
    "lon": 25.583173
  },
  {
    "name": "Easybox Strada Mihai Viteazul",
    "address": "Strada Mihai Viteazul, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.654088,
    "lon": 25.601284
  },
  {
    "name": "Easybox Strada Ioan V. Socec",
    "address": "Strada Ioan V. Socec, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.670853,
    "lon": 25.599966
  },
  {
    "name": "Easybox Strada Nicolae Labiș",
    "address": "Strada Nicolae Labiș, Tractorul, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.679435,
    "lon": 25.606943
  },
  {
    "name": "Easybox Strada Pelicanului",
    "address": "Strada Pelicanului, Bartolomeu Nord, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.665759,
    "lon": 25.559369
  },
  {
    "name": "Easybox Bulevardul Saturn",
    "address": "Bulevardul Saturn, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.643248,
    "lon": 25.632321
  },
  {
    "name": "Easybox Strada Brândușelor",
    "address": "Strada Brândușelor, Florilor-Craiter, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.654202,
    "lon": 25.624723
  },
  {
    "name": "Easybox Strada Arinului",
    "address": "Strada Arinului, Valea Cetății, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.633417,
    "lon": 25.604176
  },
  {
    "name": "Easybox Strada Izvorului",
    "address": "Strada Izvorului, Stupini, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.708648,
    "lon": 25.565378
  },
  {
    "name": "Easybox Strada Barbu Lăutaru",
    "address": "Strada Barbu Lăutaru, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.635414,
    "lon": 25.624957
  },
  {
    "name": "Easybox Strada Alexandru Ioan Cuza",
    "address": "Strada Alexandru Ioan Cuza, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.651304,
    "lon": 25.595533
  },
  {
    "name": "Easybox Strada 13 Decembrie",
    "address": "Strada 13 Decembrie, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.650864,
    "lon": 25.603839
  },
  {
    "name": "Easybox Strada Constantin Dobrogeanu Gherea",
    "address": "Strada Constantin Dobrogeanu Gherea, Centrul Nou, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.643365,
    "lon": 25.597862
  },
  {
    "name": "Easybox Strada Carpaților",
    "address": "Strada Carpaților, Astra, Brașov",
    "city": "Brașov",
    "county": "Brașov",
    "lat": 45.642417,
    "lon": 25.61806
  },
  {
    "name": "Easybox Strada Tulnici",
    "address": "Strada Tulnici, Berceni, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.388732,
    "lon": 26.132356
  },
  {
    "name": "Easybox Bulevardul Mircea Vodă",
    "address": "Bulevardul Mircea Vodă, Centrul Civic, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.429214,
    "lon": 26.111782
  },
  {
    "name": "Easybox Bulevardul Bucureștii Noi",
    "address": "Bulevardul Bucureștii Noi, Pajura, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.480111,
    "lon": 26.043272
  },
  {
    "name": "Easybox Drumul Valea Ursului",
    "address": "Drumul Valea Ursului, Ghencea, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.410572,
    "lon": 26.00443
  },
  {
    "name": "Easybox Bulevardul Iuliu Maniu",
    "address": "Bulevardul Iuliu Maniu, Militari, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.43412,
    "lon": 26.001449
  },
  {
    "name": "Easybox Drumul Belșugului 38G",
    "address": "Drumul Belșugului 38G, Militari, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.436231,
    "lon": 25.994017
  },
  {
    "name": "Easybox Bulevardul Timișoara 101P",
    "address": "Bulevardul Timișoara 101P, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.418133,
    "lon": 26.000243
  },
  {
    "name": "Easybox Bulevardul Iuliu Maniu 396-400",
    "address": "Bulevardul Iuliu Maniu 396-400, Militari, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.434186,
    "lon": 25.99521
  },
  {
    "name": "Easybox Bulevardul Iuliu Maniu 432",
    "address": "Bulevardul Iuliu Maniu 432, Militari, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.435175,
    "lon": 25.992907
  },
  {
    "name": "Easybox Prelungirea Ghencea",
    "address": "Prelungirea Ghencea, Ghencea, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.409165,
    "lon": 25.997064
  },
  {
    "name": "Easybox Șoseaua Chitilei",
    "address": "Șoseaua Chitilei, Chitila - Triaj, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.488485,
    "lon": 26.01558
  },
  {
    "name": "Easybox Bulevardul Theodor Pallady",
    "address": "Bulevardul Theodor Pallady, Titanul Nou, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.405407,
    "lon": 26.205233
  },
  {
    "name": "easybox Gura Arieșului",
    "address": "Drumul Gura Arieșului, Titanul Nou, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.414983,
    "lon": 26.201196
  },
  {
    "name": "Easybox Prelugirea Ghencea",
    "address": "Prelugirea Ghencea, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.408692,
    "lon": 25.99251
  },
  {
    "name": "Easybox Bulevardul Iuliu Maniu 171C",
    "address": "Bulevardul Iuliu Maniu 171C, Militari, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.433766,
    "lon": 25.994999
  },
  {
    "name": "Easybox Bulevardul Theodor Pallady",
    "address": "Bulevardul Theodor Pallady, Titanul Nou, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.405991,
    "lon": 26.209095
  },
  {
    "name": "easybox Pipera Business Park",
    "address": "Șoseaua Pipera 43, Tei - Toboc, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.48102,
    "lon": 26.103936
  },
  {
    "name": "Easybox Strada George Constantinescu",
    "address": "Strada George Constantinescu, Pipera, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.479013,
    "lon": 26.116365
  },
  {
    "name": "Easybox Strada Valea Oltului",
    "address": "Strada Valea Oltului, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.412898,
    "lon": 26.014791
  },
  {
    "name": "Easybox Prelungirea Ghencea",
    "address": "Prelungirea Ghencea, Ghencea, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.411218,
    "lon": 26.015502
  },
  {
    "name": "Easybox Strada Constantin Arion",
    "address": "Strada Constantin Arion, Gara de Nord, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.44957,
    "lon": 26.07659
  },
  {
    "name": "Easybox Strada Sergent Ion Pechiu",
    "address": "Strada Sergent Ion Pechiu, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.370171,
    "lon": 26.142741
  },
  {
    "name": "Easybox Bulevardul Aerogării",
    "address": "Bulevardul Aerogării, Băneasa, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.49405,
    "lon": 26.081024
  },
  {
    "name": "Easybox Bulevardul Ion Mihalache",
    "address": "Bulevardul Ion Mihalache, Cișmigiu, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.45469,
    "lon": 26.081508
  },
  {
    "name": "Easybox Prelungirea Ghencea",
    "address": "Prelungirea Ghencea, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.40898,
    "lon": 25.982681
  },
  {
    "name": "Easybox Șoseaua Gheorghe Ionescu Sisești",
    "address": "Șoseaua Gheorghe Ionescu Sisești, Băneasa, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.501715,
    "lon": 26.065532
  },
  {
    "name": "Easybox Aleea Meteorologiei",
    "address": "Aleea Meteorologiei, Băneasa, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.51018,
    "lon": 26.075696
  },
  {
    "name": "Easybox Bulevardul Ion Ionescu de la Brad",
    "address": "Bulevardul Ion Ionescu de la Brad, Băneasa, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.500325,
    "lon": 26.068649
  },
  {
    "name": "Easybox Calea Radu Vlădescu",
    "address": "Calea Radu Vlădescu, Băneasa, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.510171,
    "lon": 26.086424
  },
  {
    "name": "Easybox Șoseaua Gheorghe Ionescu Sisești",
    "address": "Șoseaua Gheorghe Ionescu Sisești, Vatra Nouă, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.502893,
    "lon": 26.0545
  },
  {
    "name": "Easybox Drumul Pădurea Neagră 2A",
    "address": "Drumul Pădurea Neagră 2A, Băneasa, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.532861,
    "lon": 26.094576
  },
  {
    "name": "Easybox Strada Gheorghe Petrașcu",
    "address": "Strada Gheorghe Petrașcu, Titan - Balta Albă, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.428469,
    "lon": 26.140226
  },
  {
    "name": "Easybox Strada Maior Giurescu Dimitrie",
    "address": "Strada Maior Giurescu Dimitrie, Cișmigiu, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.448502,
    "lon": 26.098916
  },
  {
    "name": "Easybox Green Parcare Rotundă",
    "address": "Aleea Lunca Mureșului, Titan - Balta Albă, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.418202,
    "lon": 26.160078
  },
  {
    "name": "Easybox Strada Chiristigiilor",
    "address": "Strada Chiristigiilor, Obor, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.448541,
    "lon": 26.130333
  },
  {
    "name": "Easybox Penes Curcanul",
    "address": "Intrarea Monolitului, Vitan, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.413477,
    "lon": 26.126004
  },
  {
    "name": "Easybox Fit Class Club",
    "address": "Strada Firidei, Titan - Balta Albă, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.415595,
    "lon": 26.160919
  },
  {
    "name": "Easybox Șoseaua Morarilor",
    "address": "Șoseaua Morarilor, Pantelimon, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.441988,
    "lon": 26.166275
  },
  {
    "name": "Easybox Șoseaua Pantelimon",
    "address": "Șoseaua Pantelimon, Pantelimon, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.442083,
    "lon": 26.160244
  },
  {
    "name": "easybox Liviu Rebreanu 6",
    "address": "Strada Pădurea Craiului, Titan - Balta Albă, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.423957,
    "lon": 26.158825
  },
  {
    "name": "easybox Constantin Rădulescu-Motru 21",
    "address": "Intrarea Viorele, Tineretului, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.413693,
    "lon": 26.109706
  },
  {
    "name": "Easybox Șoseaua Viilor",
    "address": "Șoseaua Viilor, Uranus, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.410007,
    "lon": 26.090563
  },
  {
    "name": "Easybox Strada Doctor Thoma Ionescu",
    "address": "Strada Doctor Thoma Ionescu, Cotroceni, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.430947,
    "lon": 26.071394
  },
  {
    "name": "Easybox Strada Soldat Ionescu Florea",
    "address": "Strada Soldat Ionescu Florea, Văcărești, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.3908,
    "lon": 26.129361
  },
  {
    "name": "Easybox Strada Pomârla",
    "address": "Strada Pomârla, Berceni, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.395366,
    "lon": 26.11101
  },
  {
    "name": "Easybox Bulevardul Timișoara",
    "address": "Bulevardul Timișoara, Semănătoarea, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.426602,
    "lon": 26.021297
  },
  {
    "name": "Easybox Strada Dinu Vintilă",
    "address": "Strada Dinu Vintilă, Tei - Toboc, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.454743,
    "lon": 26.107182
  },
  {
    "name": "Easybox Strada Burniței",
    "address": "Strada Burniței, Titan - Balta Albă, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.405433,
    "lon": 26.172328
  },
  {
    "name": "Easybox Șoseaua Giurgiului",
    "address": "Șoseaua Giurgiului, Giurgiului, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.391636,
    "lon": 26.093512
  },
  {
    "name": "Easybox Șoseaua Mihai Bravu",
    "address": "Șoseaua Mihai Bravu, Obor, București",
    "city": "București",
    "county": "Bucuresti",
    "lat": 44.446647,
    "lon": 26.126763
  },
  {
    "name": "Easybox Strada Constantin Brâncuși 85",
    "address": "Strada Constantin Brâncuși 85, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.764268,
    "lon": 23.607384
  },
  {
    "name": "Easybox Calea Mănăștur",
    "address": "Calea Mănăștur, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.762981,
    "lon": 23.572737
  },
  {
    "name": "Easybox Strada Arieșului 84",
    "address": "Strada Arieșului 84, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.765219,
    "lon": 23.613513
  },
  {
    "name": "Easybox Strada Arieșului",
    "address": "Strada Arieșului, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.765838,
    "lon": 23.61344
  },
  {
    "name": "Easybox Strada Alexandru Vaida Voevod",
    "address": "Strada Alexandru Vaida Voevod, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.771539,
    "lon": 23.625609
  },
  {
    "name": "Easybox Strada Septimiu Albini 129",
    "address": "Strada Septimiu Albini 129, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.761742,
    "lon": 23.614202
  },
  {
    "name": "Easybox MOL Primăverii",
    "address": "Strada Almașului 9, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.758836,
    "lon": 23.558151
  },
  {
    "name": "Easybox Strada Romul Ladea",
    "address": "Strada Romul Ladea, Borhanci, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.754277,
    "lon": 23.622107
  },
  {
    "name": "Easybox Strada Borhanciului",
    "address": "Strada Borhanciului, Borhanci, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.75708,
    "lon": 23.62071
  },
  {
    "name": "Easybox Strada Borhanciului 26",
    "address": "Strada Borhanciului 26, Borhanci, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.756797,
    "lon": 23.623832
  },
  {
    "name": "easybox Carrefour Express Calea Floresti",
    "address": "Calea Florești, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.757649,
    "lon": 23.546674
  },
  {
    "name": "Easybox Strada Crizantemelor 1",
    "address": "Strada Crizantemelor 1, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.764809,
    "lon": 23.617801
  },
  {
    "name": "Easybox Strada Diaconul Coresi 24",
    "address": "Strada Diaconul Coresi 24, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.763915,
    "lon": 23.617902
  },
  {
    "name": "Easybox Strada Constantin Brâncuși",
    "address": "Strada Constantin Brâncuși, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.758152,
    "lon": 23.617311
  },
  {
    "name": "Easybox Strada Zorilor",
    "address": "Strada Zorilor, Zorilor, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.756987,
    "lon": 23.578613
  },
  {
    "name": "easybox Bucegi 11A Scara E",
    "address": "Strada Bucegi 11A, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.754323,
    "lon": 23.555961
  },
  {
    "name": "Easybox Strada Băii",
    "address": "Strada Băii, Someșeni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.78402,
    "lon": 23.64674
  },
  {
    "name": "Easybox Strada Nicolae Steinhardt",
    "address": "Strada Nicolae Steinhardt, Europa, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.744102,
    "lon": 23.585569
  },
  {
    "name": "Easybox Strada București",
    "address": "Strada București, Mărăști, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.781047,
    "lon": 23.608084
  },
  {
    "name": "eMAG Easybox DHR Plopilor",
    "address": "Strada Plopilor 64, Plopilor, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.762291,
    "lon": 23.556303
  },
  {
    "name": "Easybox Strada Traian",
    "address": "Strada Traian, Centru, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.778833,
    "lon": 23.591675
  },
  {
    "name": "easybox Winmarkt",
    "address": "Strada Bucegi 19, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.754922,
    "lon": 23.560514
  },
  {
    "name": "eMAG Easybox Dimitrie Gusti",
    "address": "Strada Dimitrie Gusti 4-6, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.748851,
    "lon": 23.562713
  },
  {
    "name": "eMAG Easybox My Auchan Petrom Parâng",
    "address": "Strada Parâng 3, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.753474,
    "lon": 23.552659
  },
  {
    "name": "Easybox Strada Câmpul Pâinii",
    "address": "Strada Câmpul Pâinii, Bulgaria, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.785662,
    "lon": 23.608628
  },
  {
    "name": "Easybox Strada Viile Nădășel",
    "address": "Strada Viile Nădășel, Iris, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.794219,
    "lon": 23.593372
  },
  {
    "name": "Easybox Strada Fântânele",
    "address": "Strada Fântânele, Grigorescu, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.76889,
    "lon": 23.553522
  },
  {
    "name": "Easybox Aleea Gârbău",
    "address": "Aleea Gârbău, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.75295,
    "lon": 23.546115
  },
  {
    "name": "Easybox Calea Mănăștur",
    "address": "Calea Mănăștur, Plopilor, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.761412,
    "lon": 23.567209
  },
  {
    "name": "Easybox Strada Romulus Vuia",
    "address": "Strada Romulus Vuia, Gruia, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.77987,
    "lon": 23.581785
  },
  {
    "name": "Easybox Strada Soporului",
    "address": "Strada Soporului, Sopor, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.76843,
    "lon": 23.637402
  },
  {
    "name": "Easybox Strada Salcâmului",
    "address": "Strada Salcâmului, Între Ape, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.765013,
    "lon": 23.569259
  },
  {
    "name": "easybox Cadoul Meu",
    "address": "Aleea Padin 21, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.757507,
    "lon": 23.549779
  },
  {
    "name": "eMAG Easybox Pensiunea Casa Boca",
    "address": "Strada Câmpului 197A, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.747014,
    "lon": 23.569133
  },
  {
    "name": "Easybox Strada Agricultorilor",
    "address": "Strada Agricultorilor, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.756566,
    "lon": 23.545733
  },
  {
    "name": "easybox Bucegi 11A Bloc B1",
    "address": "Strada Primăverii, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.7547,
    "lon": 23.556375
  },
  {
    "name": "Easybox Calea Turzii",
    "address": "Calea Turzii, Europa, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.744448,
    "lon": 23.591981
  },
  {
    "name": "easybox OMV Calea Florești",
    "address": "Calea Florești 56, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.758558,
    "lon": 23.549303
  },
  {
    "name": "Easybox Strada Ștefan Ruha",
    "address": "Strada Ștefan Ruha, Borhanci, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.754227,
    "lon": 23.628343
  },
  {
    "name": "Easybox Henri Barbusse 43",
    "address": "Strada Henri Barbusse, Mărăști, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.783171,
    "lon": 23.607846
  },
  {
    "name": "easybox Grigore Alexandrescu 28",
    "address": "Strada Agricultorilor, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.755787,
    "lon": 23.546284
  },
  {
    "name": "Easybox Strada Elicei",
    "address": "Strada Elicei, Someșeni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.78105,
    "lon": 23.671702
  },
  {
    "name": "Easybox Strada Mureșului",
    "address": "Strada Mureșului, Între Lacuri, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.778976,
    "lon": 23.629614
  },
  {
    "name": "Easybox Strada Liviu Rebreanu 48",
    "address": "Strada Liviu Rebreanu 48, Gheorgheni, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.765219,
    "lon": 23.620089
  },
  {
    "name": "easybox Batozei 46",
    "address": "Strada Batozei 46, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.753934,
    "lon": 23.545212
  },
  {
    "name": "Easybox Strada Aurel Vlaicu",
    "address": "Strada Aurel Vlaicu, Între Lacuri, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.780508,
    "lon": 23.627433
  },
  {
    "name": "Easybox Strada Sarmisegetuza",
    "address": "Strada Sarmisegetuza, Între Lacuri, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.775361,
    "lon": 23.623398
  },
  {
    "name": "Easybox Bulevardul 21 Decembrie 1989",
    "address": "Bulevardul 21 Decembrie 1989, Centru, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.771667,
    "lon": 23.591193
  },
  {
    "name": "Easybox Strada Între Lacuri",
    "address": "Strada Între Lacuri, Între Lacuri, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.775896,
    "lon": 23.624857
  },
  {
    "name": "easybox DHR Frunzișului",
    "address": "Strada Frunzișului 83, Mănăștur, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.748909,
    "lon": 23.574175
  },
  {
    "name": "easybox Iulius Mall Timisoara",
    "address": "Fountain Plaza, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.765594,
    "lon": 21.229443
  },
  {
    "name": "Easybox Piața Avram Iancu",
    "address": "Piața Avram Iancu, Mehala, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.764837,
    "lon": 21.206971
  },
  {
    "name": "Easybox Splaiul Nistrului",
    "address": "Splaiul Nistrului, Fabric, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.759819,
    "lon": 21.248355
  },
  {
    "name": "Easybox Piața Giroc",
    "address": "Piața Giroc, Soarelui, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.733923,
    "lon": 21.238255
  },
  {
    "name": "Easybox Strada Mareșal Constantin Prezan",
    "address": "Strada Mareșal Constantin Prezan, Braytim - Timișoara Sud, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.730184,
    "lon": 21.247209
  },
  {
    "name": "Easybox Strada Ana Lugojana",
    "address": "Strada Ana Lugojana, Braytim - Timișoara Sud, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.730501,
    "lon": 21.239885
  },
  {
    "name": "Easybox Strada Eduard Pamfil",
    "address": "Strada Eduard Pamfil, Braytim - Timișoara Sud, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.730595,
    "lon": 21.244964
  },
  {
    "name": "Easybox Strada Claude Debussy",
    "address": "Strada Claude Debussy, Braytim - Timișoara Sud, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.724981,
    "lon": 21.248044
  },
  {
    "name": "Easybox Calea Bogdăneștilor",
    "address": "Calea Bogdăneștilor, Blașcovici, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.755654,
    "lon": 21.192688
  },
  {
    "name": "Easybox Strada Perlei",
    "address": "Strada Perlei, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.776407,
    "lon": 21.234464
  },
  {
    "name": "Easybox Strada Doctor Grigore T. Popa",
    "address": "Strada Doctor Grigore T. Popa, Aradului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.778956,
    "lon": 21.226848
  },
  {
    "name": "Easybox Bulevardul Eroilor de la Tisa",
    "address": "Bulevardul Eroilor de la Tisa, Fabric, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.750687,
    "lon": 21.251156
  },
  {
    "name": "Easybox Piața Timișoara 700",
    "address": "Piața Timișoara 700, Tipografilor, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.757491,
    "lon": 21.222857
  },
  {
    "name": "Easybox Strada Mareșal Alexandru Averescu",
    "address": "Strada Mareșal Alexandru Averescu, Girocului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.73218,
    "lon": 21.228731
  },
  {
    "name": "Easybox Strada Cireșului",
    "address": "Strada Cireșului, Ronaț, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.753593,
    "lon": 21.187079
  },
  {
    "name": "Easybox Bulevardul Eroilor de la Tisa",
    "address": "Bulevardul Eroilor de la Tisa, Fabric, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.749325,
    "lon": 21.248125
  },
  {
    "name": "Easybox Strada Doctor Grigore T. Popa",
    "address": "Strada Doctor Grigore T. Popa, Aradului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.77793,
    "lon": 21.22986
  },
  {
    "name": "Easybox Strada Craiova",
    "address": "Strada Craiova, Olimpia-Stadion, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.742217,
    "lon": 21.238305
  },
  {
    "name": "Easybox Strada Lunei",
    "address": "Strada Lunei, Prințul Turcesc - Lunei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.753586,
    "lon": 21.256767
  },
  {
    "name": "Easybox Bulevardul Eroilor de la Tisa",
    "address": "Bulevardul Eroilor de la Tisa, Complex Studențesc, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.747892,
    "lon": 21.243004
  },
  {
    "name": "Easybox Strada Academician Dimitrie Gusti",
    "address": "Strada Academician Dimitrie Gusti, Bastion, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.759771,
    "lon": 21.242786
  },
  {
    "name": "Easybox Bulevardul Liviu Rebreanu",
    "address": "Bulevardul Liviu Rebreanu, Buziașului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.73538,
    "lon": 21.255913
  },
  {
    "name": "Easybox Strada Stuparilor",
    "address": "Strada Stuparilor, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.770406,
    "lon": 21.244942
  },
  {
    "name": "easybox Beta Shop",
    "address": "Strada Constantin Rădulescu Motru, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.772941,
    "lon": 21.236539
  },
  {
    "name": "Easybox Strada Oglinzilor",
    "address": "Strada Oglinzilor, Soarelui, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.732917,
    "lon": 21.248859
  },
  {
    "name": "easybox Silistra",
    "address": "Strada Silistra, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.775583,
    "lon": 21.24027
  },
  {
    "name": "Easybox Strada Virgil Birou",
    "address": "Strada Virgil Birou, Complex Studențesc, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.747887,
    "lon": 21.240762
  },
  {
    "name": "easybox Ion Roată",
    "address": "Strada Ion Roată, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.772489,
    "lon": 21.240091
  },
  {
    "name": "easybox Apostoli Petru și Pavel",
    "address": "Strada Sfinții Apostoli Petru și Pavel, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.774861,
    "lon": 21.240471
  },
  {
    "name": "Easybox Strada Chimiștilor",
    "address": "Strada Chimiștilor, Buziașului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.741163,
    "lon": 21.259708
  },
  {
    "name": "Easybox Aleea Hotinului",
    "address": "Aleea Hotinului, Torontalului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.771954,
    "lon": 21.216217
  },
  {
    "name": "Easybox Strada Bucegi",
    "address": "Strada Bucegi, Olimpia-Stadion, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.743278,
    "lon": 21.24496
  },
  {
    "name": "Easybox Strada Cluj",
    "address": "Strada Cluj, Elisabetin, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.744976,
    "lon": 21.236272
  },
  {
    "name": "Easybox Splaiul Grivița",
    "address": "Splaiul Grivița, Telegrafului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.760522,
    "lon": 21.258394
  },
  {
    "name": "Easybox Strada Mureș",
    "address": "Strada Mureș, Șagului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.729775,
    "lon": 21.220195
  },
  {
    "name": "Easybox Calea Martirilor 1989 43",
    "address": "Calea Martirilor 1989 43, Girocului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.731109,
    "lon": 21.237735
  },
  {
    "name": "easybox Restaurant Burgund",
    "address": "Strada Oravița, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.771706,
    "lon": 21.247169
  },
  {
    "name": "easybox Eso Petrol",
    "address": "Strada Holdelor, Lipovei, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.774708,
    "lon": 21.238984
  },
  {
    "name": "Easybox Strada Ioan Sârbu",
    "address": "Strada Ioan Sârbu, Șagului, Timișoara",
    "city": "Timișoara",
    "county": "Timiș",
    "lat": 45.730584,
    "lon": 21.223081
  },
  {
    "name": "Easybox Calea Martirilor 1989",
    "address": "Calea Martirilor 1989, Braytim - Timișoara Sud, Giroc",
    "city": "Giroc",
    "county": "Timiș",
    "lat": 45.720741,
    "lon": 21.23631
  },
  {
    "name": "easybox Timisoara 29",
    "address": "Bulevardul Timișoara, Drumul Taberei, București",
    "city": "București",
    "county": "Timisoara",
    "lat": 44.427746,
    "lon": 26.041942
  },
  {
    "name": "easybox Bd Timisoara 51",
    "address": "Bulevardul Timișoara, Semănătoarea, București",
    "city": "București",
    "county": "Timisoara",
    "lat": 44.426814,
    "lon": 26.032687
  },
  {
    "name": "Easybox Bulevardul Timișoara 58M",
    "address": "Bulevardul Timișoara 58M, București",
    "city": "București",
    "county": "Timisoara",
    "lat": 44.427843,
    "lon": 26.015727
  },
  {
    "name": "easybox Auchan Exigent Plaza",
    "address": "Bulevardul Timișoara, Grozăvești, București",
    "city": "București",
    "county": "Timisoara",
    "lat": 44.428585,
    "lon": 26.042045
  },
  {
    "name": "Easybox Bulevardul Timișoara 56",
    "address": "Bulevardul Timișoara 56, Semănătoarea, București",
    "city": "București",
    "county": "Timisoara",
    "lat": 44.426484,
    "lon": 26.018865
  },
  {
    "name": "Easybox Strada Petre Țuțea",
    "address": "Strada Petre Țuțea, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.143626,
    "lon": 27.579853
  },
  {
    "name": "Easybox Strada Anastasie Panu",
    "address": "Strada Anastasie Panu, Centru, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.160248,
    "lon": 27.58875
  },
  {
    "name": "Easybox Rond Zimbru",
    "address": "Strada Sarmisegetuza, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.166229,
    "lon": 27.557453
  },
  {
    "name": "easybox Stejar 14",
    "address": "Strada Stejar, Tătărași Nord, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.162831,
    "lon": 27.607176
  },
  {
    "name": "easybox Farmacia Fortis",
    "address": "Aleea Tudor Neculai 79, bloc 977C, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.133925,
    "lon": 27.571178
  },
  {
    "name": "Easybox Strada Teodor Râșcanu",
    "address": "Strada Teodor Râșcanu, Uzinei, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.161243,
    "lon": 27.576513
  },
  {
    "name": "Easybox Strada Bazei",
    "address": "Strada Bazei, Valea Adâncă",
    "city": "Valea Adâncă",
    "county": "Iași",
    "lat": 47.123236,
    "lon": 27.560806
  },
  {
    "name": "easybox Ciric 22",
    "address": "Strada Ciric, Tătărași Nord, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.164175,
    "lon": 27.611175
  },
  {
    "name": "Easybox Strada Ciurchi",
    "address": "Strada Ciurchi, Tătărași Sud, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.154805,
    "lon": 27.616671
  },
  {
    "name": "EasyBox - Aeroportului",
    "address": "Strada Aeroportului, Aviației, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.159952,
    "lon": 27.626804
  },
  {
    "name": "Easybox Strada Sălciilor",
    "address": "Strada Sălciilor, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.147613,
    "lon": 27.573518
  },
  {
    "name": "Easybox Bulevardul Alexandru cel Bun 64",
    "address": "Bulevardul Alexandru cel Bun 64, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.166192,
    "lon": 27.558984
  },
  {
    "name": "eMAG easybox",
    "address": "Strada Vitejilor, Dacia, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.169037,
    "lon": 27.550567
  },
  {
    "name": "eMAG easybox",
    "address": "Șoseaua Nicolina 10-12, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.138577,
    "lon": 27.577066
  },
  {
    "name": "Easybox Calea Chișinăului",
    "address": "Calea Chișinăului, Țesătura, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.148783,
    "lon": 27.595269
  },
  {
    "name": "Easybox Mega Image Copou",
    "address": "Pista Copou, Păcurari, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.179795,
    "lon": 27.568551
  },
  {
    "name": "easybox Ciric",
    "address": "Strada Ciric, Tătărași Nord, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.163266,
    "lon": 27.614393
  },
  {
    "name": "Easybox Strada Tabacului",
    "address": "Strada Tabacului, Dacia, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.169879,
    "lon": 27.553173
  },
  {
    "name": "easybox AdentuM",
    "address": "Șoseaua Nicolina 52, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.134993,
    "lon": 27.57176
  },
  {
    "name": "Easybox Șoseaua Nicolina",
    "address": "Șoseaua Nicolina, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.140427,
    "lon": 27.578958
  },
  {
    "name": "eMAG easybox",
    "address": "Strada Libertății, Galata, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.134552,
    "lon": 27.576272
  },
  {
    "name": "Easybox Piața Nicolina",
    "address": "Bulevardul Nicolae Iorga, Baza 3, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.145899,
    "lon": 27.589075
  },
  {
    "name": "Easybox Șoseaua Rediu Varianta",
    "address": "Șoseaua Rediu Varianta, Canta, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.174353,
    "lon": 27.536908
  },
  {
    "name": "eMAG easybox",
    "address": "Strada Basarabi, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.164102,
    "lon": 27.56054
  },
  {
    "name": "Easybox Bulevardul Primăverii",
    "address": "Bulevardul Primăverii, Țesătura, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.14781,
    "lon": 27.593179
  },
  {
    "name": "Easybox Strada Sălciilor",
    "address": "Strada Sălciilor, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.144347,
    "lon": 27.575939
  },
  {
    "name": "Easybox Strada Misai",
    "address": "Strada Misai, Moara de Vânt, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.165035,
    "lon": 27.596545
  },
  {
    "name": "Easybox Strada Egalității",
    "address": "Strada Egalității, Nicolina, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.146756,
    "lon": 27.576256
  },
  {
    "name": "Easybox Bulevardul Regele Mihai I al României",
    "address": "Bulevardul Regele Mihai I al României, Cantemir, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.154627,
    "lon": 27.580269
  },
  {
    "name": "Easybox Aleea Basarabi",
    "address": "Aleea Basarabi, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.163498,
    "lon": 27.56317
  },
  {
    "name": "easybox Piata Chirila",
    "address": "Strada Petre Ispirescu, Tătărași Nord, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.163061,
    "lon": 27.605138
  },
  {
    "name": "Easybox Bulevardul Nicolae Iorga",
    "address": "Bulevardul Nicolae Iorga, Baza 3, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.145891,
    "lon": 27.588951
  },
  {
    "name": "easybox Ion Creanga 51",
    "address": "Strada Donos, Tătărași Nord, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.161934,
    "lon": 27.612465
  },
  {
    "name": "Easybox Strada Profesor Ion Inculeț",
    "address": "Strada Profesor Ion Inculeț, Baza 3, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.13934,
    "lon": 27.579362
  },
  {
    "name": "Easybox Strada Otilia Cazimir",
    "address": "Strada Otilia Cazimir, Centru, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.159022,
    "lon": 27.597579
  },
  {
    "name": "Easybox Bulevardul Dacia",
    "address": "Bulevardul Dacia, Dacia, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.166549,
    "lon": 27.548109
  },
  {
    "name": "eMAG easybox",
    "address": "Strada Grigore Ion, Sergent, Dacia, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.171733,
    "lon": 27.539037
  },
  {
    "name": "Easybox Strada Olt",
    "address": "Strada Olt, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.163287,
    "lon": 27.564988
  },
  {
    "name": "Easybox Piața Voievozilor",
    "address": "Piața Voievozilor, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.161685,
    "lon": 27.562913
  },
  {
    "name": "Easybox Piața Voievozilor",
    "address": "Piața Voievozilor, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.162762,
    "lon": 27.5617
  },
  {
    "name": "eMAG easybox",
    "address": "Bulevardul Dacia, Dacia, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.166872,
    "lon": 27.545706
  },
  {
    "name": "Easybox Șoseaua Păcurari",
    "address": "Șoseaua Păcurari, Canta, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.173706,
    "lon": 27.538034
  },
  {
    "name": "eMAG easybox",
    "address": "Strada Bacinschi, Gară, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.169095,
    "lon": 27.568558
  },
  {
    "name": "eMAG easybox",
    "address": "Șoseaua Națională, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.161668,
    "lon": 27.57088
  },
  {
    "name": "Easybox Șoseaua Moara de Foc",
    "address": "Șoseaua Moara de Foc, Gară, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.171729,
    "lon": 27.560225
  },
  {
    "name": "eMAG easybox",
    "address": "Strada Sarmisegetuza, Alexandru cel Bun, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.168095,
    "lon": 27.558011
  },
  {
    "name": "Easybox Bloc 508",
    "address": "Strada Canta, Canta, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.172646,
    "lon": 27.541091
  },
  {
    "name": "Easybox - Crisului",
    "address": "Strada Crișului, Mircea cel Bătrân, Iași",
    "city": "Iași",
    "county": "Iași",
    "lat": 47.155064,
    "lon": 27.571716
  },
  {
    "name": "Easybox Strada Lațcu Vodă",
    "address": "Strada Lațcu Vodă, Valea Adâncă",
    "city": "Valea Adâncă",
    "county": "Iași",
    "lat": 47.11855,
    "lon": 27.563582
  },
  {
    "name": "Easybox Strada Principală",
    "address": "Strada Principală, Valea Adâncă",
    "city": "Valea Adâncă",
    "county": "Iași",
    "lat": 47.121767,
    "lon": 27.553921
  },
  {
    "name": "easybox Green Campus Universitatea Ovidius",
    "address": "Bulevardul Aurel Vlaicu, Tomis Nord, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.21562,
    "lon": 28.623732
  },
  {
    "name": "Easybox DN39E",
    "address": "DN39E, Agigea",
    "city": "Agigea",
    "county": "Constanța",
    "lat": 44.130419,
    "lon": 28.611735
  },
  {
    "name": "Easybox Prelungirea Traian",
    "address": "Prelungirea Traian, Gară, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.168466,
    "lon": 28.638948
  },
  {
    "name": "easybox Trocadeo",
    "address": "Strada Locotenent Dumitru Lemnea, Tomis 1, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.18748,
    "lon": 28.632763
  },
  {
    "name": "Easybox Bulevardul Mamaia",
    "address": "Bulevardul Mamaia, Faleză Nord, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.19386,
    "lon": 28.649519
  },
  {
    "name": "Easybox Șoseaua Mangaliei",
    "address": "Șoseaua Mangaliei, Gară, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.167894,
    "lon": 28.633688
  },
  {
    "name": "Easybox Aleea Călușarilor",
    "address": "Aleea Călușarilor, Tomis Nord, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.215281,
    "lon": 28.628884
  },
  {
    "name": "easybox Crucial Systems",
    "address": "Bulevardul Mamaia, Faleză Nord, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.200698,
    "lon": 28.646673
  },
  {
    "name": "easybox Queen Mary",
    "address": "Strada Unirii, Faleză Nord, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.2009,
    "lon": 28.650124
  },
  {
    "name": "easybox Piața Filipescu",
    "address": "Strada Jiului, Faleză Nord, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.199127,
    "lon": 28.650075
  },
  {
    "name": "Easybox Strada Ion Rațiu",
    "address": "Strada Ion Rațiu, Tomis 1, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.192733,
    "lon": 28.639191
  },
  {
    "name": "easybox Magazin Beloco",
    "address": "Strada Putna, Compozitori, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.191535,
    "lon": 28.613401
  },
  {
    "name": "easybox Baba Novac",
    "address": "Strada Baba Novac, Compozitori, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.188091,
    "lon": 28.612726
  },
  {
    "name": "easybox Baba Novac 94",
    "address": "Strada Baba Novac, Compozitori, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.188244,
    "lon": 28.612385
  },
  {
    "name": "Easybox Șoseaua Mangaliei",
    "address": "Șoseaua Mangaliei, Veterani, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.133844,
    "lon": 28.621797
  },
  {
    "name": "Easybox Strada Sulmona",
    "address": "Strada Sulmona, Peninsulă, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.175538,
    "lon": 28.65705
  },
  {
    "name": "Easybox Strada Poporului",
    "address": "Strada Poporului, Medgidia",
    "city": "Medgidia",
    "county": "Constanța",
    "lat": 44.2451,
    "lon": 28.281667
  },
  {
    "name": "Easybox Strada Mării",
    "address": "Strada Mării, Năvodari",
    "city": "Năvodari",
    "county": "Constanța",
    "lat": 44.32018,
    "lon": 28.616711
  },
  {
    "name": "Easybox Bulevardul Republicii",
    "address": "Bulevardul Republicii, Eforie",
    "city": "Eforie",
    "county": "Constanța",
    "lat": 44.072638,
    "lon": 28.628308
  },
  {
    "name": "Easybox Șoseaua Constanței",
    "address": "Șoseaua Constanței, Cumpăna",
    "city": "Cumpăna",
    "county": "Constanța",
    "lat": 44.115546,
    "lon": 28.559778
  },
  {
    "name": "Easybox Strada Preot Alexandru Dumitrescu",
    "address": "Strada Preot Alexandru Dumitrescu, Cumpăna",
    "city": "Cumpăna",
    "county": "Constanța",
    "lat": 44.112249,
    "lon": 28.556553
  },
  {
    "name": "Easybox Strada Strajei",
    "address": "Strada Strajei, Cumpăna",
    "city": "Cumpăna",
    "county": "Constanța",
    "lat": 44.110223,
    "lon": 28.54395
  },
  {
    "name": "Easybox Strada Panselelor",
    "address": "Strada Panselelor, Eforie",
    "city": "Eforie",
    "county": "Constanța",
    "lat": 44.06387,
    "lon": 28.634856
  },
  {
    "name": "Easybox Strada Axente Sever Ioan",
    "address": "Strada Axente Sever Ioan, Lazu",
    "city": "Lazu",
    "county": "Constanța",
    "lat": 44.114607,
    "lon": 28.608078
  },
  {
    "name": "Easybox Bulevardul Tudor Vladimirescu",
    "address": "Bulevardul Tudor Vladimirescu, Eforie",
    "city": "Eforie",
    "county": "Constanța",
    "lat": 44.074798,
    "lon": 28.637169
  },
  {
    "name": "Easybox Strada Smarald",
    "address": "Strada Smarald, Eforie",
    "city": "Eforie",
    "county": "Constanța",
    "lat": 44.066804,
    "lon": 28.633833
  },
  {
    "name": "Easybox sameday Euro Vial",
    "address": "Strada Nicolae Filimon, Inel II, Constanța",
    "city": "Constanța",
    "county": "Constanța",
    "lat": 44.17383,
    "lon": 28.604998
  },
  {
    "name": "Easybox Bulevardul 1 Mai",
    "address": "Bulevardul 1 Mai, 1 Mai, Craiova",
    "city": "Craiova",
    "county": "Dolj",
    "lat": 44.307962,
    "lon": 23.793558
  },
  {
    "name": "Easybox Strada Ștefan cel Mare",
    "address": "Strada Ștefan cel Mare, Vasile Aaron, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.788801,
    "lon": 24.17502
  },
  {
    "name": "Easybox Strada Iacob Bologa",
    "address": "Strada Iacob Bologa, Lazaret, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.802051,
    "lon": 24.170163
  },
  {
    "name": "Easybox Strada Cezar Bolliac",
    "address": "Strada Cezar Bolliac, Lazaret, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.80234,
    "lon": 24.172901
  },
  {
    "name": "Easybox Strada Bâlea",
    "address": "Strada Bâlea, Trei Stejari, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.7924,
    "lon": 24.161954
  },
  {
    "name": "Easybox Ștrand 2",
    "address": "Strada Profesor Ioan Moga, Ștrand II, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.782104,
    "lon": 24.130507
  },
  {
    "name": "Easybox Kastani Residence",
    "address": "Calea Șurii Mici, Nord - Vest, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.804527,
    "lon": 24.12228
  },
  {
    "name": "Easybox Dimitrie Cantemir 46",
    "address": "Strada Dimitrie Cantemir, Ștrand II, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.780365,
    "lon": 24.129526
  },
  {
    "name": "Easybox Tilișca 17",
    "address": "Strada Tilișca, Ștrand II, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.776708,
    "lon": 24.128292
  },
  {
    "name": "Easybox Strada Ilarie Chendi",
    "address": "Strada Ilarie Chendi, Dumbrăvii, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.778603,
    "lon": 24.144468
  },
  {
    "name": "easybox Renard",
    "address": "Strada Daniel Renard 23A, Arhitecților, Cisnădie",
    "city": "Cisnădie",
    "county": "Sibiu",
    "lat": 45.755479,
    "lon": 24.146759
  },
  {
    "name": "Easybox Strada Podului",
    "address": "Strada Podului, Gușterița, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.810554,
    "lon": 24.177448
  },
  {
    "name": "Easybox Strada Malului",
    "address": "Strada Malului, Centrul Istoric, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.793666,
    "lon": 24.133858
  },
  {
    "name": "Easybox DN14",
    "address": "DN14, Ștrand, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.794913,
    "lon": 24.131368
  },
  {
    "name": "Easybox Aleea Țesătorilor",
    "address": "Aleea Țesătorilor, Reșița, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.801928,
    "lon": 24.158137
  },
  {
    "name": "Easybox Strada Justiției",
    "address": "Strada Justiției, Centrul Civic, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.787688,
    "lon": 24.146308
  },
  {
    "name": "Easybox NTT Data",
    "address": "Strada Șerbota, Trei Stejari, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.793671,
    "lon": 24.161552
  },
  {
    "name": "Easybox Strada Anton Pann",
    "address": "Strada Anton Pann, Cartierul Gloria, Mediaș",
    "city": "Mediaș",
    "county": "Sibiu",
    "lat": 46.155998,
    "lon": 24.360664
  },
  {
    "name": "Easybox Strada Piața Veche",
    "address": "Strada Piața Veche, Săliște",
    "city": "Săliște",
    "county": "Sibiu",
    "lat": 45.793124,
    "lon": 23.882123
  },
  {
    "name": "Easybox Strada Avram Iancu",
    "address": "Strada Avram Iancu, Miercurea Sibiului",
    "city": "Miercurea Sibiului",
    "county": "Sibiu",
    "lat": 45.88568,
    "lon": 23.799527
  },
  {
    "name": "Easybox Aleea Valea Săpunului",
    "address": "Aleea Valea Săpunului, Arhitecților, Cisnădie",
    "city": "Cisnădie",
    "county": "Sibiu",
    "lat": 45.771784,
    "lon": 24.148216
  },
  {
    "name": "easybox Școala de tenis",
    "address": "Strada Școala de tenis 32, Colonia Seviș, Cisnădie",
    "city": "Cisnădie",
    "county": "Sibiu",
    "lat": 45.754004,
    "lon": 24.148737
  },
  {
    "name": "Sameday Easybox",
    "address": "Calea Poplăcii, Valea Aurie, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.773513,
    "lon": 24.128534
  },
  {
    "name": "Sameday Easybox",
    "address": "Piața Tălmaciu, Ștrand II, Sibiu",
    "city": "Sibiu",
    "county": "Sibiu",
    "lat": 45.775765,
    "lon": 24.130575
  },
  {
    "name": "Easybox Calea Aradului",
    "address": "Calea Aradului, Ioșia Sud, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.043225,
    "lon": 21.898905
  },
  {
    "name": "Easybox Strada Simion Bărnuțiu",
    "address": "Strada Simion Bărnuțiu, Splaiul Crișanei, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.059396,
    "lon": 21.912831
  },
  {
    "name": "Easybox Bulevardul Ștefan cel Mare",
    "address": "Bulevardul Ștefan cel Mare, Rogerius, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.076666,
    "lon": 21.928296
  },
  {
    "name": "Easybox Bulevardul Decebal",
    "address": "Bulevardul Decebal, Splaiul Crișanei, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.061735,
    "lon": 21.919157
  },
  {
    "name": "Easybox Strada Bârsei",
    "address": "Strada Bârsei, Rogerius, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.078686,
    "lon": 21.925058
  },
  {
    "name": "Easybox Strada Camille Flammarion",
    "address": "Strada Camille Flammarion, Rogerius, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.079663,
    "lon": 21.921158
  },
  {
    "name": "Easybox Strada Mureșului",
    "address": "Strada Mureșului, Rogerius, Oradea",
    "city": "Oradea",
    "county": "Bihor",
    "lat": 47.08089,
    "lon": 21.924549
  },
  {
    "name": "Easybox Aleea Petrochimiștilor",
    "address": "Aleea Petrochimiștilor, Bucov II, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.939122,
    "lon": 26.047123
  },
  {
    "name": "Easybox Strada Cosminele",
    "address": "Strada Cosminele, Vest II, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.934926,
    "lon": 25.990393
  },
  {
    "name": "EMAG easybox",
    "address": "Șoseaua Vestului, Republicii Vest I, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.948753,
    "lon": 25.997428
  },
  {
    "name": "Easybox Strada Andrei Mureșanu",
    "address": "Strada Andrei Mureșanu, Andrei Mureșanu, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.951592,
    "lon": 26.010966
  },
  {
    "name": "Easybox Strada Mihai Bravu",
    "address": "Strada Mihai Bravu, Mihai Bravu, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.939666,
    "lon": 26.036285
  },
  {
    "name": "Easybox Strada Cameliei",
    "address": "Strada Cameliei, Nord, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.956747,
    "lon": 25.998111
  },
  {
    "name": "Easybox Strada Mircea cel Bătrân",
    "address": "Strada Mircea cel Bătrân, Pictor Rosenthal, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.931992,
    "lon": 26.053647
  },
  {
    "name": "Easybox Strada Libertății",
    "address": "Strada Libertății, 9 Mai, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.927133,
    "lon": 25.99239
  },
  {
    "name": "Easybox Strada Gheorghe Grigore Cantacuzino 220",
    "address": "Strada Gheorghe Grigore Cantacuzino 220, Peneș Curcanul, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.937879,
    "lon": 26.001249
  },
  {
    "name": "Easybox Strada Pielari",
    "address": "Strada Pielari, Mihai Bravu, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.941826,
    "lon": 26.037432
  },
  {
    "name": "Easybox Strada Torcători",
    "address": "Strada Torcători, Mărășești, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.93751,
    "lon": 26.004345
  },
  {
    "name": "Easybox Strada Grădinari",
    "address": "Strada Grădinari, Mihai Bravu, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.937702,
    "lon": 26.045638
  },
  {
    "name": "Easybox Strada Horei",
    "address": "Strada Horei, Republicii Vest II, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.941681,
    "lon": 26.013287
  },
  {
    "name": "Easybox Aleea Distilatorilor",
    "address": "Aleea Distilatorilor, Mihai Bravu, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.939608,
    "lon": 26.043676
  },
  {
    "name": "Easybox Strada Mihai Bravu",
    "address": "Strada Mihai Bravu, Mihai Bravu, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.938963,
    "lon": 26.042808
  },
  {
    "name": "Easybox Strada Sabinelor",
    "address": "Strada Sabinelor, Bucov II, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.940506,
    "lon": 26.047261
  },
  {
    "name": "Easybox Strada Alba Iulia",
    "address": "Strada Alba Iulia, Carino, Ploiești",
    "city": "Ploiești",
    "county": "Prahova",
    "lat": 44.956092,
    "lon": 25.993469
  },
  {
    "name": "Easybox Șoseaua București-Ploiești",
    "address": "Șoseaua București-Ploiești, Băneasa, București",
    "city": "București",
    "county": "Ploiesti",
    "lat": 44.48688,
    "lon": 26.079001
  },
  {
    "name": "easybox Navelor",
    "address": "Strada Navelor, Mazepa 1, Galați",
    "city": "Galați",
    "county": "Galați",
    "lat": 45.431294,
    "lon": 28.058104
  },
  {
    "name": "easybox Roșiori 14 bl. G3",
    "address": "Strada Roșiori 14, Mazepa 1, Galați",
    "city": "Galați",
    "county": "Galați",
    "lat": 45.42881,
    "lon": 28.050173
  },
  {
    "name": "Easybox Strada Traian",
    "address": "Strada Traian, Cartierul Vânători, Galați",
    "city": "Galați",
    "county": "Galați",
    "lat": 45.46841,
    "lon": 28.033876
  },
  {
    "name": "Easybox Strada Carol",
    "address": "Strada Carol, Tecuci",
    "city": "Tecuci",
    "county": "Galați",
    "lat": 45.848144,
    "lon": 27.414455
  },
  {
    "name": "Easybox Sameday",
    "address": "Strada Galați, Galați",
    "city": "Galați",
    "county": "Galați",
    "lat": 45.468608,
    "lon": 27.95008
  },
  {
    "name": "Easybox Strada Onisifor Ghibu",
    "address": "Strada Onisifor Ghibu, Mărăști, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.777378,
    "lon": 23.602929
  },
  {
    "name": "Easybox Strada Galați",
    "address": "Strada Galați, Între Lacuri, Cluj-Napoca",
    "city": "Cluj-Napoca",
    "county": "Cluj",
    "lat": 46.774721,
    "lon": 23.627811
  },
  {
    "name": "Easybox Calea Galați",
    "address": "Calea Galați, Brăilița, Brăila",
    "city": "Brăila",
    "county": "Brăila",
    "lat": 45.30573,
    "lon": 27.963545
  },
  {
    "name": "Easybox Strada Alunului",
    "address": "Strada Alunului, Găvana, Pitești",
    "city": "Pitești",
    "county": "Argeș",
    "lat": 44.873997,
    "lon": 24.840928
  },
  {
    "name": "Easybox Aleea Spitalului",
    "address": "Aleea Spitalului, Găvana, Pitești",
    "city": "Pitești",
    "county": "Argeș",
    "lat": 44.871189,
    "lon": 24.851441
  },
  {
    "name": "Easybox Bulevardul I. C. Brătianu 2",
    "address": "Bulevardul I. C. Brătianu 2, Centru, Pitești",
    "city": "Pitești",
    "county": "Argeș",
    "lat": 44.854818,
    "lon": 24.878895
  },
  {
    "name": "Easybox Bulevardul Nicolae Bălcescu",
    "address": "Bulevardul Nicolae Bălcescu, Găvana, Pitești",
    "city": "Pitești",
    "county": "Argeș",
    "lat": 44.878994,
    "lon": 24.842566
  },
  {
    "name": "Easybox Aleea Ținutului Herța",
    "address": "Aleea Ținutului Herța, Prundu, Pitești",
    "city": "Pitești",
    "county": "Argeș",
    "lat": 44.839948,
    "lon": 24.895951
  },
  {
    "name": "Easybox Strada Pitești",
    "address": "Strada Pitești, Cartier Pârliți, Slatina",
    "city": "Slatina",
    "county": "Olt",
    "lat": 44.44325,
    "lon": 24.377166
  },
  {
    "name": "easybox Central Park",
    "address": "Strada Grigore Alexandrescu 6, Centru, Arad",
    "city": "Arad",
    "county": "Arad",
    "lat": 46.168271,
    "lon": 21.316368
  },
  {
    "name": "Easybox Piața Eroilor",
    "address": "Piața Eroilor, Mureșel, Arad",
    "city": "Arad",
    "county": "Arad",
    "lat": 46.158562,
    "lon": 21.321559
  },
  {
    "name": "Easybox Calea Aurel Vlaicu",
    "address": "Calea Aurel Vlaicu, Bujac, Arad",
    "city": "Arad",
    "county": "Arad",
    "lat": 46.20103,
    "lon": 21.282654
  },
  {
    "name": "Easybox Strada Petru Rareș",
    "address": "Strada Petru Rareș, Grădiște, Arad",
    "city": "Arad",
    "county": "Arad",
    "lat": 46.194448,
    "lon": 21.333671
  },
  {
    "name": "Easybox Strada Bârzava",
    "address": "Strada Bârzava, Micălaca, Arad",
    "city": "Arad",
    "county": "Arad",
    "lat": 46.178913,
    "lon": 21.344134
  },
  {
    "name": "easybox Fontana Voinicilor",
    "address": "Strada Voinicilor, Micălaca, Arad",
    "city": "Arad",
    "county": "Arad",
    "lat": 46.17136,
    "lon": 21.355486
  },
  {
    "name": "Easybox Strada 3",
    "address": "Strada 3, Vladimirescu",
    "city": "Vladimirescu",
    "county": "Arad",
    "lat": 46.174472,
    "lon": 21.400359
  },
  {
    "name": "easybox Str. 5",
    "address": "Strada 5, Vladimirescu",
    "city": "Vladimirescu",
    "county": "Arad",
    "lat": 46.170547,
    "lon": 21.400292
  },
  {
    "name": "easybox Pensiunea Almada",
    "address": "Strada Cetății Orod, Via Carmina, Vladimirescu",
    "city": "Vladimirescu",
    "county": "Arad",
    "lat": 46.166095,
    "lon": 21.390112
  },
  {
    "name": "Easybox Strada Doctor Victor Babeș",
    "address": "Strada Doctor Victor Babeș, Bacău",
    "city": "Bacău",
    "county": "Bacău",
    "lat": 46.538015,
    "lon": 26.911746
  },
  {
    "name": "Easybox Calea Romanului",
    "address": "Calea Romanului, Bacău",
    "city": "Bacău",
    "county": "Bacău",
    "lat": 46.574943,
    "lon": 26.931277
  },
  {
    "name": "Easybox Calea Republicii",
    "address": "Calea Republicii, Bacău",
    "city": "Bacău",
    "county": "Bacău",
    "lat": 46.528862,
    "lon": 26.919827
  },
  {
    "name": "Easybox Strada Libertății",
    "address": "Strada Libertății, Cvartalul I, Onești",
    "city": "Onești",
    "county": "Bacău",
    "lat": 46.243532,
    "lon": 26.755877
  },
  {
    "name": "Easybox Sameday Lidl",
    "address": "Strada Cireșoaiei, Slobozia, Onești",
    "city": "Onești",
    "county": "Bacău",
    "lat": 46.259477,
    "lon": 26.772643
  },
  {
    "name": "Easybox Strada Nicolae Arbănaș",
    "address": "Strada Nicolae Arbănaș, Târgu Ocna",
    "city": "Târgu Ocna",
    "county": "Bacău",
    "lat": 46.279718,
    "lon": 26.604143
  },
  {
    "name": "easybox Penny Targu Mures 2",
    "address": "Strada Constandin Hagi Stoian, Unirii, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.569453,
    "lon": 24.546657
  },
  {
    "name": "EasyBox Sprint Car Wash",
    "address": "Strada Bărăganului, Unirii, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.55852,
    "lon": 24.545534
  },
  {
    "name": "Easybox Strada Livezeni 6A",
    "address": "Strada Livezeni 6A, Tudor Vladimirescu, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.534935,
    "lon": 24.594553
  },
  {
    "name": "Easybox Strada Ion Heliade Rădulescu",
    "address": "Strada Ion Heliade Rădulescu, Depozitelor, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.536022,
    "lon": 24.540937
  },
  {
    "name": "EasyBox Univam",
    "address": "Strada Decebal, Unirii, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.557662,
    "lon": 24.545368
  },
  {
    "name": "easybox Floraria la Lenuta",
    "address": "Strada Tisei, Unirii, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.555974,
    "lon": 24.547815
  },
  {
    "name": "easybox Piata Cartier Unirii",
    "address": "Strada Voinicenilor, Unirii, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.561462,
    "lon": 24.548064
  },
  {
    "name": "easybox Agrotechnic",
    "address": "Strada Voinicenilor, Unirii, Târgu Mureș",
    "city": "Târgu Mureș",
    "county": "Mureș",
    "lat": 46.571375,
    "lon": 24.546239
  },
  {
    "name": "easybox Kaufland Coșbuc",
    "address": "Strada George Coșbuc, Progresul, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.656227,
    "lon": 23.553097
  },
  {
    "name": "Easybox Strada Iuliu Maniu",
    "address": "Strada Iuliu Maniu, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.660108,
    "lon": 23.56632
  },
  {
    "name": "easybox Hotel Mara",
    "address": "Bulevardul Unirii, Progresul, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.650701,
    "lon": 23.57079
  },
  {
    "name": "easybox Kaufland Baia Mare",
    "address": "Bulevardul Unirii, Progresul, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.641945,
    "lon": 23.570222
  },
  {
    "name": "easybox Vivo Baia Mare",
    "address": "Bulevardul Independenței, Meda, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.656768,
    "lon": 23.546301
  },
  {
    "name": "Easybox Bulevardul Regele Mihai I",
    "address": "Bulevardul Regele Mihai I, Depozitelor, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.650793,
    "lon": 23.548546
  },
  {
    "name": "easybox Penny Minerilor",
    "address": "Strada Câmpul Tineretului, Centrul Vechi, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.663707,
    "lon": 23.58297
  },
  {
    "name": "easybox Auchan Baia Mare",
    "address": "Bulevardul Regele Mihai I, Baia Mare",
    "city": "Baia Mare",
    "county": "Maramureș",
    "lat": 47.645117,
    "lon": 23.525344
  },
  {
    "name": "Easybox La Bibliotecă",
    "address": "Strada Nicu Gane, Fălticeni",
    "city": "Fălticeni",
    "county": "Suceava",
    "lat": 47.461525,
    "lon": 26.29768
  },
  {
    "name": "Easybox Thales",
    "address": "Strada Liliacului, Fălticeni",
    "city": "Fălticeni",
    "county": "Suceava",
    "lat": 47.464141,
    "lon": 26.296997
  },
  {
    "name": "Easybox Bulevardul 2 Grăniceri",
    "address": "Bulevardul 2 Grăniceri, Fălticeni",
    "city": "Fălticeni",
    "county": "Suceava",
    "lat": 47.453897,
    "lon": 26.295884
  },
  {
    "name": "Easybox Strada Calea Cernăuți",
    "address": "Strada Calea Cernăuți, Vicovu de Sus",
    "city": "Vicovu de Sus",
    "county": "Suceava",
    "lat": 47.922213,
    "lon": 25.675236
  },
  {
    "name": "Easybox Strada Calea Națională",
    "address": "Strada Calea Națională, Dumbrăveni",
    "city": "Dumbrăveni",
    "county": "Suceava",
    "lat": 47.660856,
    "lon": 26.423526
  },
  {
    "name": "Easybox Strada Calea Națională",
    "address": "Strada Calea Națională, Sălăgeni",
    "city": "Sălăgeni",
    "county": "Suceava",
    "lat": 47.660256,
    "lon": 26.418238
  },
  {
    "name": "Easybox DN2E",
    "address": "DN2E, Pârteștii de Sus",
    "city": "Pârteștii de Sus",
    "county": "Suceava",
    "lat": 47.641565,
    "lon": 25.922184
  },
  {
    "name": "Easybox Sameday",
    "address": "Strada Păcii, Burdujeni, Suceava",
    "city": "Suceava",
    "county": "Suceava",
    "lat": 47.669547,
    "lon": 26.284309
  },
  {
    "name": "Easybox Sameday",
    "address": "Strada Eroilor, Burdujeni, Suceava",
    "city": "Suceava",
    "county": "Suceava",
    "lat": 47.665865,
    "lon": 26.281526
  },
  {
    "name": "Easybox Sameday",
    "address": "Calea Unirii, Centru, Suceava",
    "city": "Suceava",
    "county": "Suceava",
    "lat": 47.660373,
    "lon": 26.266333
  },
  {
    "name": "Easybox Sameday",
    "address": "Strada Păcii, Salcea",
    "city": "Salcea",
    "county": "Suceava",
    "lat": 47.652326,
    "lon": 26.367158
  },
  {
    "name": "easybox Cartier Orizont Buzau",
    "address": "Strada Nicu Constantinescu, Cartier Orizont, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.16719,
    "lon": 26.811265
  },
  {
    "name": "easybox Buzoianu Gară",
    "address": "Strada Colonel Ion Buzoianu, Cartierul Gării, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.143633,
    "lon": 26.825315
  },
  {
    "name": "easybox - MOL Spătarului",
    "address": "Șoseaua Spătarului, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.133476,
    "lon": 26.81518
  },
  {
    "name": "Easybox MOL",
    "address": "Bulevardul Unirii, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.164548,
    "lon": 26.817896
  },
  {
    "name": "easybox - Petrom Republicii",
    "address": "Strada Scânteii, Cartierul Gării, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.143673,
    "lon": 26.82969
  },
  {
    "name": "easybox - Penny Sporturilor",
    "address": "Strada Sporturilor, Cartier Dorobanți, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.15539,
    "lon": 26.835253
  },
  {
    "name": "easybox - ITP Mesteacănului 12",
    "address": "Strada Mesteacănului, Cartier Broșteni, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.157385,
    "lon": 26.828103
  },
  {
    "name": "Easybox - Prutului",
    "address": "Strada Alexandru Vlahuță, Cartier Constituției, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.159763,
    "lon": 26.815365
  },
  {
    "name": "Easybox Strada Viitorului",
    "address": "Strada Viitorului, Cartierul Independenței, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.146377,
    "lon": 26.814791
  },
  {
    "name": "EasyBox - Titulescu",
    "address": "Bulevardul Nicolae Titulescu, Cartier Democrației, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.155572,
    "lon": 26.808712
  },
  {
    "name": "EasyBox - Martirilor (Mobile Mag)",
    "address": "Strada Martirilor, Cartier Nicolae Titulescu, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.154231,
    "lon": 26.806014
  },
  {
    "name": "EasyBox - Magnolia",
    "address": "Strada I.C. Brătianu, Cartier Democrației, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.151555,
    "lon": 26.812939
  },
  {
    "name": "EasyBox - Pompilu Stefu",
    "address": "Strada Stefu Pompiliu, Cartierul Independenței, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.148689,
    "lon": 26.820076
  },
  {
    "name": "EasyBox - George Emil Palade",
    "address": "Strada George Emil Palade, Cartierul Independenței, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.149901,
    "lon": 26.823566
  },
  {
    "name": "EasyBox - Popa Tun",
    "address": "Strada Popa Tun, Cartier Constituției, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.156852,
    "lon": 26.815265
  },
  {
    "name": "EasyBox - Unirii 158A",
    "address": "Bulevardul Unirii, Cartier Episcopiei, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.157243,
    "lon": 26.817068
  },
  {
    "name": "EasyBox - La Valerica",
    "address": "Strada Dimitrie Filipescu, Cartier Poștă, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.138177,
    "lon": 26.820986
  },
  {
    "name": "Easybox Strada Oituz",
    "address": "Strada Oituz, Cartier Constituției, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.163376,
    "lon": 26.815577
  },
  {
    "name": "EasyBox - Patriei",
    "address": "Strada Unirii, Cartier Democrației, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.148756,
    "lon": 26.813821
  },
  {
    "name": "easybox - Tudorauto Group",
    "address": "Strada Sporturilor, Cartier Dorobanți, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.156432,
    "lon": 26.833554
  },
  {
    "name": "easybox Total Trans Gaz",
    "address": "Bulevardul 1 Decembrie 1918, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.142172,
    "lon": 26.80994
  },
  {
    "name": "Easybox Hotel Art",
    "address": "Bulevardul Unirii, Cartier Democrației, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.152967,
    "lon": 26.817078
  },
  {
    "name": "EasyBox Piața de lactate",
    "address": "Strada Independenței, Cartierul Independenței, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.149868,
    "lon": 26.81994
  },
  {
    "name": "easybox - Auto Valmi",
    "address": "Strada Sporturilor, Cartier Dorobanți, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.150081,
    "lon": 26.835283
  },
  {
    "name": "easybox - Penny Gară",
    "address": "Strada Triumfului, Cartierul Gării, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.143608,
    "lon": 26.826649
  },
  {
    "name": "Easybox Aleea Leagănului",
    "address": "Aleea Leagănului, Cartier Crâng, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.153555,
    "lon": 26.795499
  },
  {
    "name": "Easybox Strada Colonel Ion Buzoianu",
    "address": "Strada Colonel Ion Buzoianu, Cartierul Independenței, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.148687,
    "lon": 26.816974
  },
  {
    "name": "easybox - LIDL Calea Eroilor 3",
    "address": "Strada Doctor Carol Davilla, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.141413,
    "lon": 26.809096
  },
  {
    "name": "easybox - Stadionului Buzău",
    "address": "Bulevardul Stadionului, Cartier Nicolae Titulescu, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.149828,
    "lon": 26.803502
  },
  {
    "name": "Easybox Global CashCarry",
    "address": "Strada Transilvaniei, Cartier Simileasca, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.173929,
    "lon": 26.77538
  },
  {
    "name": "easybox - TTG",
    "address": "Strada Frăsinet, Cartier Episcopiei, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.158028,
    "lon": 26.8268
  },
  {
    "name": "Easybox Strada Dorobanți",
    "address": "Strada Dorobanți, Cartier Dorobanți, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.15092,
    "lon": 26.841652
  },
  {
    "name": "easybox - O șansă în plus",
    "address": "Bulevardul Mareșal Alexandru Averescu, Cartier Nicolae Bălcescu, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.146564,
    "lon": 26.80433
  },
  {
    "name": "easybox - Triton Market Industriilor",
    "address": "Bulevardul Industriei, Cartier Mihai Viteazul, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.134588,
    "lon": 26.829876
  },
  {
    "name": "easybox - Minimarket",
    "address": "Strada Melodiei, Cartier Dorobanți, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.149495,
    "lon": 26.837914
  },
  {
    "name": "easyBox - Oltului",
    "address": "Strada Oltului, Cartier Nicolae Titulescu, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.158824,
    "lon": 26.806399
  },
  {
    "name": "easybox - Kaufland Unirii",
    "address": "Calea Eroilor, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.139357,
    "lon": 26.80027
  },
  {
    "name": "easybox - Piața Micro 5",
    "address": "Aleea Neptun, Cartier Alexandru Marghiloman, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.146786,
    "lon": 26.838076
  },
  {
    "name": "easybox Cartier Orizont Clinica",
    "address": "Strada Nicu Constantinescu, Cartier Orizont, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.167465,
    "lon": 26.816912
  },
  {
    "name": "easybox - Rompetrol Spătarului",
    "address": "Bulevardul Industriei, Buzău",
    "city": "Buzău",
    "county": "Buzău",
    "lat": 45.136119,
    "lon": 26.815081
  },
  {
    "name": "Easybox Strada Nicolae Bălcescu",
    "address": "Strada Nicolae Bălcescu, Pogoanele",
    "city": "Pogoanele",
    "county": "Buzău",
    "lat": 44.917688,
    "lon": 26.988294
  },
  {
    "name": "EasyBox - Mărăcineni",
    "address": "Strada Centrală, Mărăcineni",
    "city": "Mărăcineni",
    "county": "Buzău",
    "lat": 45.180953,
    "lon": 26.810179
  },
  {
    "name": "EasyBox - Căpățânești (Supermarket Cernica)",
    "address": "Strada Centrală, Căpățânești",
    "city": "Căpățânești",
    "county": "Buzău",
    "lat": 45.189109,
    "lon": 26.793881
  },
  {
    "name": "EasyBox - Berca",
    "address": "Strada 1 Decembrie 1918, Berca",
    "city": "Berca",
    "county": "Buzău",
    "lat": 45.285878,
    "lon": 26.684214
  },
  {
    "name": "EasyBox - Vernesti (Mrs Auto One)",
    "address": "Strada Barierei, Brădeanca",
    "city": "Brădeanca",
    "county": "Buzău",
    "lat": 45.205506,
    "lon": 26.726632
  },
  {
    "name": "EasyBox - Vernești",
    "address": "Strada Brașovului 98B, Brădeanca",
    "city": "Brădeanca",
    "county": "Buzău",
    "lat": 45.205583,
    "lon": 26.73153
  },
  {
    "name": "EasyBox - Cândești",
    "address": "Șoseaua Brașovului, Cândești",
    "city": "Cândești",
    "county": "Buzău",
    "lat": 45.246229,
    "lon": 26.707854
  },
  {
    "name": "EasyBox - Săpoca (Profi)",
    "address": "Strada Principală, Valea Puțului",
    "city": "Valea Puțului",
    "county": "Buzău",
    "lat": 45.240605,
    "lon": 26.748456
  },
  {
    "name": "Easybox Aleea Ipotești",
    "address": "Aleea Ipotești, Solidarității, Satu Mare",
    "city": "Satu Mare",
    "county": "Satu Mare",
    "lat": 47.803,
    "lon": 22.881833
  },
  {
    "name": "EasyBox BartaAti 23",
    "address": "Strada Ganea, Carpați II, Satu Mare",
    "city": "Satu Mare",
    "county": "Satu Mare",
    "lat": 47.770319,
    "lon": 22.885949
  },
  {
    "name": "Easybox Penny Tasnad",
    "address": "Strada Teiului, Tășnad",
    "city": "Tășnad",
    "county": "Satu Mare",
    "lat": 47.480156,
    "lon": 22.583554
  },
  {
    "name": "easybox Hotel Orhideea",
    "address": "Strada Pieții, Negrești-Oaș",
    "city": "Negrești-Oaș",
    "county": "Satu Mare",
    "lat": 47.869751,
    "lon": 23.425997
  },
  {
    "name": "Easybox Strada Victoriei",
    "address": "Strada Victoriei, Negrești-Oaș",
    "city": "Negrești-Oaș",
    "county": "Satu Mare",
    "lat": 47.864778,
    "lon": 23.421133
  },
  {
    "name": "Easybox Aleea Teilor",
    "address": "Aleea Teilor, Ostroveni, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.095754,
    "lon": 24.369265
  },
  {
    "name": "Easybox Strada Carol I",
    "address": "Strada Carol I, 1 Mai, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.101757,
    "lon": 24.362031
  },
  {
    "name": "Easybox Strada Luceafărului",
    "address": "Strada Luceafărului, Ostroveni, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.098051,
    "lon": 24.36861
  },
  {
    "name": "Easybox Bulevardul Tineretului",
    "address": "Bulevardul Tineretului, Ostroveni, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.095565,
    "lon": 24.372462
  },
  {
    "name": "Easybox Calea lui Traian",
    "address": "Calea lui Traian, 1 Mai, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.099847,
    "lon": 24.362252
  },
  {
    "name": "Easybox Strada Marin Preda",
    "address": "Strada Marin Preda, Ostroveni, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.093913,
    "lon": 24.376558
  },
  {
    "name": "Easybox Strada Ferdinand",
    "address": "Strada Ferdinand, Traian, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.111595,
    "lon": 24.377839
  },
  {
    "name": "Easybox Strada Ostroveni",
    "address": "Strada Ostroveni, Ostroveni, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.090787,
    "lon": 24.373947
  },
  {
    "name": "Easybox Strada Nicolae Titulescu",
    "address": "Strada Nicolae Titulescu, Traian, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.113984,
    "lon": 24.373857
  },
  {
    "name": "Easybox Strada General Gheorghe Magheru",
    "address": "Strada General Gheorghe Magheru, Traian, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.106719,
    "lon": 24.366984
  },
  {
    "name": "Easybox Bulevardul Nicolae Bălcescu",
    "address": "Bulevardul Nicolae Bălcescu, Traian, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.108766,
    "lon": 24.371667
  },
  {
    "name": "Easybox Strada Henri Coandă",
    "address": "Strada Henri Coandă, Nord, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.115292,
    "lon": 24.36454
  },
  {
    "name": "Easybox Aleea Cocorilor",
    "address": "Aleea Cocorilor, Nord, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.112797,
    "lon": 24.36434
  },
  {
    "name": "Easybox Strada George Coșbuc",
    "address": "Strada George Coșbuc, 1 Mai, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.096625,
    "lon": 24.365175
  },
  {
    "name": "Easybox Aleea Melodiei",
    "address": "Aleea Melodiei, Nord, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.113881,
    "lon": 24.371079
  },
  {
    "name": "Easybox Strada Matei Basarab",
    "address": "Strada Matei Basarab, Traian, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.113894,
    "lon": 24.375782
  },
  {
    "name": "Easybox Strada Doctor Hacman",
    "address": "Strada Doctor Hacman, Nord, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.112839,
    "lon": 24.365817
  },
  {
    "name": "Easybox Strada Știrbei Vodă",
    "address": "Strada Știrbei Vodă, Morilor, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.105518,
    "lon": 24.348464
  },
  {
    "name": "Easybox Calea lui Traian",
    "address": "Calea lui Traian, Nord, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.122565,
    "lon": 24.36403
  },
  {
    "name": "Easybox Aleea Rândunelelor",
    "address": "Aleea Rândunelelor, Traian, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.110494,
    "lon": 24.366552
  },
  {
    "name": "Easybox Strada Crinilor",
    "address": "Strada Crinilor, Nord, Râmnicu Vâlcea",
    "city": "Râmnicu Vâlcea",
    "county": "Vâlcea",
    "lat": 45.118052,
    "lon": 24.363728
  },
  {
    "name": "Sameday EasyBox",
    "address": "Strada Arieșului, Ampoi III, Alba Iulia",
    "city": "Alba Iulia",
    "county": "Alba",
    "lat": 46.082558,
    "lon": 23.582235
  },
  {
    "name": "Easybox Strada Morii",
    "address": "Strada Morii, Lipoveni, Alba Iulia",
    "city": "Alba Iulia",
    "county": "Alba",
    "lat": 46.074484,
    "lon": 23.585344
  },
  {
    "name": "Easybox Strada Portland",
    "address": "Strada Portland, Tolstoi, Alba Iulia",
    "city": "Alba Iulia",
    "county": "Alba",
    "lat": 46.074176,
    "lon": 23.579333
  },
  {
    "name": "Easybox McDrive",
    "address": "McDrive, Cetate, Alba Iulia",
    "city": "Alba Iulia",
    "county": "Alba",
    "lat": 46.08154,
    "lon": 23.563639
  },
  {
    "name": "Easybox Bulevardul Încoronării",
    "address": "Bulevardul Încoronării, Maieri, Alba Iulia",
    "city": "Alba Iulia",
    "county": "Alba",
    "lat": 46.057131,
    "lon": 23.575678
  },
  {
    "name": "Sameday Easybox",
    "address": "Strada Cuza Vodă, Progresul, Deva",
    "city": "Deva",
    "county": "Hunedoara",
    "lat": 45.88497,
    "lon": 22.904793
  },
  {
    "name": "Sameday Easybox",
    "address": "Strada Mărășești, Obor, Focșani",
    "city": "Focșani",
    "county": "Vrancea",
    "lat": 45.710047,
    "lon": 27.183487
  },
  {
    "name": "easybox Soarelui 45A",
    "address": "Strada Soarelui, Independenței, Bistrița",
    "city": "Bistrița",
    "county": "Bistrița-Năsăud",
    "lat": 47.125252,
    "lon": 24.452452
  }
];
