const filmOpties = document.getElementById("films");
const stoelenLijst = document.getElementById("stoelenlijst");

let aantalStoelen = 50;
let geselecteerdeStoelen = 0;
let films = [
  { titel: "The Outpost", prijs: 10, vanaf: 16, gerne: "oorlog" },
  {
    titel: "De Piraten van Hiernaast",
    prijs: 7,
    vanaf: 6,
    gerne: "kinderfilm",
  },
  { titel: "The Wretched", prijs: 10, vanaf: 16, gerne: "horror" },
  {
    titel: "The King of Staten Island",
    prijs: 10,
    vanaf: 12,
    gerne: "komedie",
  },
];

const filmsToList = () => {
  films.forEach((film) => {
    (newOption = document.createElement("option")),
      (newOption.innerHTML = `${film.titel}  €${film.prijs}`),
      (newOption.value = `${film.prijs}`);
    filmOpties.appendChild(newOption);
  });
};

const maakStoelen = (aantal) => {
  for (let i = 0; i < aantal; i++) {
    const newLi = document.createElement("li");
    newLi.className = "vrij";
    newLi.id = "stoelnr" + [i];
    newLi.addEventListener("click", (event) => {
      event.target.className == "selecteerd"
        ? geselecteerdeStoelen--
        : geselecteerdeStoelen++;
      const toggleStoel = newLi.className == "vrij" ? "selecteerd" : "vrij";
      newLi.className = toggleStoel;
      onderTitel(geselecteerdeStoelen);
    });
    stoelenLijst.appendChild(newLi);
  }
};

const onderTitel = (aantal) => {
  const zin = document.getElementById("eindzin");
  const filmprijs = document.getElementById("films").value;
  const totaal = aantal * filmprijs;
  zin.innerHTML = `Je hebt ${aantal} stoel(en) geselecteerd, per stuk kost €${filmprijs}. Dat is totaal €${totaal}`;
};

filmsToList();
maakStoelen(aantalStoelen);
