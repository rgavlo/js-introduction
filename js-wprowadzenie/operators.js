'use strict';

var liczba1 = 13;
var liczba2 = 5;

var wynik;
wynik = liczba1%liczba2;
console.log(wynik);


while (liczba2 < liczba1) {
        console.log (liczba2);
        ++ liczba2;
}

(2<1) ? console.log('tak') : console.log('nie');


if ('2'===2) {
    document.write('prawda');
    
} else {
    document.write('nie prawda');
}


if ( !( ("2" !== 2) && (8>4) ) ) {
    document.write ("<br> prawda");
}


var liczba3 = 6, liczba4 = 7;

   !( (liczba3 >= liczba4) || (liczba4 == liczba3) ) ? console.log("wieksze") : console.log("mniejsze");