const pocetKusu = Number (prompt ('Vyplňte počet kusů: '));
let cena;
if (pocetKusu < 50){
    cena = pocetKusu * 300;
}
else if (pocetKusu <= 200) {
    cena = pocetKusu * 250;
}
else if (pocetKusu <= 500) {
    cena = pocetKusu * 200;
}
else if (pocetKusu <= 1000){
    cena = pocetKusu * 150;
}
else {
    cena = pocetKusu * 120;
}
document.body.innerHTML += `<p> Výsledná cena po započítání množstevní slevy je: ${cena} Kč. </p>`;