import { utesEllenorzes } from "./fugvenyek.js";

const tesztek = [
  ["a1", "a1"],
  ["a1", "b3"],
  ["a1", "a7"],
  ["a1", "h1"],
  ["a1", "h8"],
  ["h8", "a1"],
  ["a8", "h1"],
  ["h1", "a8"]
];

tesztek.forEach(([elso, masodik]) => {
  const eredmeny = utesEllenorzes(elso, masodik);
  console.log(`${elso} -> ${masodik}: ${eredmeny}`);
});
