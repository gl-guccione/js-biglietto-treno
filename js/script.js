// numero di km da percorrere (prompt)
// età del passeggero (prompt)
// calcola prezzo biglietto (0.21€ / km)
// - <18 20% di sconto
// - >65 40% di sconto
// - all 0% di sconto

var name = prompt("Inserire nome"); // getting name
var surname = prompt("Inserire cognome"); // getting surname
var km = prompt("Inserire km da percorrere"); // getting km
var age = prompt("Inserire l'età"); // getting age
var discount; // declare discount
var d = new Date(); // getting date from user's pc
var tomorrow = d.getDate() + 1; // calculate tomorrow
// console.log(km + " " + age);

var priceKm = 0.21; // base price


// error if km or age prompted is NaN
if (isNaN(km)) {
  alert("Errore, i dati inseriti non sono validi");
  km = prompt("Inserire km da percorrere");
} else if (isNaN(age)) {
  alert("Errore, i dati inseriti non sono validi");
  age = prompt("Inserire l'età");
}
// console.log(km + " " + age);


if (age < 18) { // get 20% discount
  priceKm = priceKm * 0.8;
  discount = "20";
  document.getElementById("discount").innerHTML = "* sconto già applicato del " + discount + "%";
} else if (age >= 65) { // get 40% discount
  priceKm = priceKm * 0.6;
  discount = "40"
  document.getElementById("discount").innerHTML = "* sconto già applicato del " + discount + "%";
}

var totalPrice = priceKm * km; // getting the price
totalPrice = totalPrice.toFixed(2);

// printing results in HTML
document.getElementById("total-price").innerHTML = totalPrice + "€";
document.getElementById("name").innerHTML = name;
document.getElementById("surname").innerHTML = surname;
document.getElementById("km").innerHTML = km + "km";
document.getElementById("clock").innerHTML = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
document.getElementById("date").innerHTML = tomorrow + "-" + d.getMonth() + "-" + d.getFullYear();
