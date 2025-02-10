function powitajUzytkownika(imie) {
  document.getElementById("powitanie").innerText = "cześć, " + imie + "! Miło cię widzieć.");
}
const imieUzytkownika = prompt("podaj swoje imie:");
powitajUzytkownika(imieUzytkownika);
