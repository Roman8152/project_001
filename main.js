function celsia() {
    var f = document.getElementById("vstup").value;
    var vysledekCelsia = 5 * (f - 32) / 9
    vysledekCelsia = Math.floor(vysledekCelsia);
    $("#finalC").html(vysledekCelsia); 
}

function fahr() {
    var c = document.getElementById("vstup").value;
    var vysledekFahr = 9 * c / 5 + 32;
    vysledekFahr = Math.floor(vysledekFahr);
    $("#finalF").html(vysledekFahr);
}