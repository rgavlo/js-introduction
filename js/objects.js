"use strict"

//
//function Osoba (imie) {
//    this.imie = imie;
//    this.nazwisko;
//    this.wzrost;
//    this.oczy;
//    this.wyswietlInfo = function() {
//        console.log("Imie:" + this.imie +"\n" + 
//                    "Nazwisko: " + this.nazwisko +"\n" + 
//                    "Wzrost: " + this.wzrost+"\n"  + 
//                    "Oczy: " + this.oczy ); 
//    }
//}
//
//var roman = new Osoba ('Roman');
//roman.wyswietlInfo();


function Samochod (marka, kolor, kraj) {
    this.marka = marka;
    this.kolor = kolor;
    this.kraj = kraj;
    
    this.wyswietlInfo = function() {
        console.log ("marka " + this.marka +"\n" + 
                    "kolor "+ this.kolor  +"\n" +
                    "kraj " +this.kraj );
    }
}


var Samochod = new Samochod ("BMW", "Czerwony", "Niemcy")
Samochod.wyswietlInfo();


var samochodnowy = new Samochod('Mercedes', 'Bialy');
samochodnowy.wyswietlInfo();





var jsonOsoby = {
    
    
    
}



//var Osobaja = {
//    imie: "Roman",
//    wzrost: 189,
//    wyswietlDetale: function() {
//    console.log(this.imie + " " + this. wzrost);
//}
//}
//
//
//Osobaja["imie"]= "Trump"
//Osobaja.wzrost = 180;
//
//Osobaja.oczy = "niebieskie";
//
//Osobaja.wyswietlDetale = function() {
//    console.log(this.imie + " " + this.wzrost + " " + this.oczy);
//  
//}
//
//Osobaja.wyswietlDetale();




//function tablicasuma() {
//var liczby = [2, 3, 4, 5, 6, 7, 8];
//    
//    
//
//    var licz = 0;
//    for(var i = 0; i < liczby.length; ++i) {
//    licz += liczby[i];
//
//
//
//}
//
//
//    return licz;
//    
// }
//    
//    console.log(tablicasuma());