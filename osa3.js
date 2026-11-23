// Tehtävä 1: Celsius Fahrenheitiksi

const celsiusFahrenheitiksi = (c) => c * 9 / 5 + 32;

console.log(celsiusFahrenheitiksi(-20)); // -4
console.log(celsiusFahrenheitiksi(0));   // 32
console.log(celsiusFahrenheitiksi(25));  // 77


// Tehtävä 2: Arvosana

function arvosana(pisteet) {
  if (pisteet < 0 || pisteet > 100) {
    return "Virheellinen pistemäärä";
  }

  if (pisteet < 50) return 0;
  if (pisteet < 60) return 1;
  if (pisteet < 70) return 2;
  if (pisteet < 80) return 3;
  if (pisteet < 90) return 4;

  return 5;
}

console.log(arvosana(42));  // 0
console.log(arvosana(55));  // 1
console.log(arvosana(68));  // 2
console.log(arvosana(74));  // 3
console.log(arvosana(86));  // 4
console.log(arvosana(95));  // 5


// Tehtävä 3: Tervehdys oletusarvolla

function tervehdi(nimi, kieli = "fi") {
  if (kieli === "en") {
    return `Hello, ${nimi}!`;
  }

  if (kieli === "sv") {
    return `Hej, ${nimi}!`;
  }

  return `Hei, ${nimi}!`;
}

console.log(tervehdi("Aino"));       // Hei, Aino!
console.log(tervehdi("John", "en")); // Hello, John!
console.log(tervehdi("Erik", "sv")); // Hej, Erik!


// Tehtävä 4: FizzBuzz

for (let luku = 1; luku <= 30; luku++) {
  if (luku % 3 === 0 && luku % 5 === 0) {
    console.log("FizzBuzz");
  } else if (luku % 3 === 0) {
    console.log("Fizz");
  } else if (luku % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(luku);
  }
}


// Tehtävä 5: Puuttuvat tiedot

const asetukset = {
  teema: null,
  fonttikoko: 0
};

console.log(asetukset.teema ?? "vaalea");    // vaalea
console.log(asetukset.fonttikoko ?? 16);     // 0

// Vertailu:
console.log(asetukset.fonttikoko || 16);     // 16
console.log(asetukset.fonttikoko ?? 16);     // 0
