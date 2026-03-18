let novekvo = {
  nev: true,
  nemzetiseg: true,
  gyozelmek_szama: true,
};

const thElemek = document.querySelectorAll("#tabla th");

thElemek[0].addEventListener("click", () => rendez("nev"));
thElemek[1].addEventListener("click", () => rendez("nemzetiseg"));
thElemek[2].addEventListener("click", () => rendez("gyozelmek_szama"));

function rendez(mezo) {
  sakkozok.sort((a, b) => {
    if (mezo === "gyozelmek_szama") {
      return novekvo[mezo] ? a[mezo] - b[mezo] : b[mezo] - a[mezo];
    } else {
      return novekvo[mezo]
        ? a[mezo].localeCompare(b[mezo])
        : b[mezo].localeCompare(a[mezo]);
    }
  });

  novekvo[mezo] = !novekvo[mezo];

  megjelenit(sakkozok);
}
export function gomb() {
  let gombElem = document.getElementById("gomb");

  gombElem.addEventListener("click", function () {
    let poz1 = document.getElementById("pozicio1").value;
    let poz2 = document.getElementById("pozicio2").value;

    let asd = utesEllenorzes(poz1, poz2);
    kiir(asd);
  });
}

export function utesEllenorzes(poz1, poz2) {
  let asd;
  let babuElso = poz1.charCodeAt(0);
  let babuMasodik = Number(poz1[1]);
  let babu2Elso = poz2.charCodeAt(0);
  let babu2Masodik = Number(poz2[1]);
  console.log(babuElso);
  console.log(babu2Elso);

  if (babuElso == babu2Elso) {
    asd = "üti (függőlegesen, GATYA)";
  } else if (babuMasodik == babu2Masodik) {
    asd = "üti (vizszintesen, GATYA)";
  } else if (
    Math.abs(babuElso - babu2Elso) === Math.abs(babuMasodik - babu2Masodik)
  ) {
    asd = "üti (átlóban, GATYA)";
  } else {
    asd = "nem üti";
  }
  return asd;
}

export function kiir(asd) {
  let kiirHelyElem = document.getElementById("kiir");
  kiirHelyElem.innerHTML = asd;
}
