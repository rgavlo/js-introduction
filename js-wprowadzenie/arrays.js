"use strict"

var liczba1 = 50;
var kolory = [ 'żółty', 'pomarańczowy', 'łososiowy' ];


kolory[3] = "czarny";
kolory.push("czerwony");
kolory.pop();

var dlugoscTablicy 
dlugoscTablicy = kolory.unshift("zielony");

kolory.shift();

console.log(kolory.length);
console.log(kolory);



//console.log(kolory.reverse());

//console.log(kolory.sort());


var koloryAny = ['niebieski', 'różowy', 'lazurowy', 'biały'];
//
//console.log ( koloryAny.concat(kolory) );


var universalnaZmienna; 
//
console.log(koloryAny.splice(2,2, "brązowy", "złoty" ));
console.log(koloryAny );


console.log (koloryAny.toString());


//universalnaZmienna =  koloryAny.indexOf ("niebieski");
//console.log(universalnaZmienna);
//
//if (Array.isArray(koloryAny) ) {
//    console.log("jest tablica");
//} else {
//    console.log("nie jest");
//}


//for (var i=0; i<kolory.length; ++i) {
//    
//    console.log(kolory[i]);
//}
//
//kolory.forEach( function (element, iteration )  {
//               console.log ( "Numer koloru " + iteration + " " + element );
//               } ); 
//
//
//var p1= kolory.join(" ");
//console.log(p1);




