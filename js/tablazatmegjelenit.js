export function megjelenit(adat) {
  const tbody = document.querySelector("#tabla tbody");
  tbody.innerHTML = "";

  adat.forEach(elem => {
    tbody.innerHTML += `
      <tr>
        <td>${elem.nev}</td>
        <td>${elem.nemzetiseg}</td>
        <td>${elem.gyozelmek_szama}</td>
      </tr>
    `;
  });
}