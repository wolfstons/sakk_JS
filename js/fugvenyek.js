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
      return novekvo[mezo]
        ? a[mezo] - b[mezo]
        : b[mezo] - a[mezo];
    } else {
        
      return novekvo[mezo]
        ? a[mezo].localeCompare(b[mezo])
        : b[mezo].localeCompare(a[mezo]);
    }

  });


  novekvo[mezo] = !novekvo[mezo];


  megjelenit(sakkozok);
}