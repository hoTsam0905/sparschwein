
let ZweiEuro = parseInt(localStorage.getItem("ZweiEuro")) || 0;
let EinEuro = parseInt(localStorage.getItem("EInEuro")) || 0;

let liste = localStorage.getItem("liste") || "";
document.getElementById("history").innerHTML = liste;

let jetzt = new Date(),
    tag = jetzt.getDate(),
    monat = jetzt.getMonth(),
    jahr = jetzt.getFullYear();

let datum = tag + "." + (monat + 1) + "." + jahr;

let betrag = 0; // Wert für die Liste, also Ein Euro oder Zwei

function history(betrag) {

    if (betrag > 0) {
        richtung = "hinein";
        wert = betrag;
    } else {
        richtung = "heraus";
        wert = -betrag;
    }
    eintrag = "am " + datum + " " + wert + "€ " + richtung + " getan.<br>";
    console.log(eintrag);
    historyListe = document.getElementById("history");
    historyListe.innerHTML = eintrag + historyListe.innerHTML;
    localStorage.setItem("liste", historyListe.innerHTML);
}

function plus2() {
    ZweiEuro += 2;
    update(+2);
}

function minus2() {
    ZweiEuro -= 2;
    if (ZweiEuro < 0) { ZweiEuro = 0; }
    update(-2);
}

function plus1() {
    EinEuro++;
    update(+1);
}

function minus1() {
    if (EinEuro < 0) { einEuro = 0; }
    EinEuro--;
    update(-1);
}

function update(betrag) {
    document.getElementById("summe1").innerHTML = (EinEuro) + "€";
    document.getElementById("summe2").innerHTML = (ZweiEuro) + "€";
    document.getElementById("gesamt").innerHTML = (EinEuro + ZweiEuro) + "€";
    localStorage.setItem("ZweiEuro", ZweiEuro);
    localStorage.setItem("EInEuro", EinEuro);
    if (betrag != 0) {
        history(betrag);
    }
}

update(betrag);