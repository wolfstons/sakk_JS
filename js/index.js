import { sakkozok } from "./adatok.js";
import { megjelenit } from "./tablazatmegjelenit.js";
import { gomb, kiir } from "./fugvenyek.js";

megjelenit(sakkozok);

let novekvo = {
  nev: true,
  nemzetiseg: true,
  gyozelmek_szama: true,
};

// fejlécek kiválasztása
const thElemek = document.querySelectorAll("#tabla th");

// eseménykezelők
thElemek[0].addEventListener("click", () => rendez("nev"));
thElemek[1].addEventListener("click", () => rendez("nemzetiseg"));
thElemek[2].addEventListener("click", () => rendez("gyozelmek_szama"));

function rendez(mezo) {
  sakkozok.sort((a, b) => {
    if (typeof a[mezo] === "number") {
      return novekvo[mezo] ? a[mezo] - b[mezo] : b[mezo] - a[mezo];
    } else {
      return novekvo[mezo]
        ? a[mezo].localeCompare(b[mezo])
        : b[mezo].localeCompare(a[mezo]);
    }
  });

  // irány megfordítása
  novekvo[mezo] = !novekvo[mezo];

  // újrarajzolás
  megjelenit(sakkozok);
}

gomb();
