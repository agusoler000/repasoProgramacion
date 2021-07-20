function zodiacal(day, month) {
    var zodiacalsing = '';
    if (day > 21 && month == 3 || day < 19 && month == 4) {
        zodiacalsing = 'Aries';
    }
    else if (day >= 20 && month == 4 || day <= 20 && month == 5) {
        zodiacalsing = 'Tauro';
    }
    else if (day >= 21 && month == 5 || day <= 21 && month == 6) {
        zodiacalsing = 'Geminis';
    }
    else if (day >= 22 && month == 6 || day <= 22 && month == 7) {
        zodiacalsing = 'Cancer';
    }
    else if (day >= 23 && month == 7 || day <= 22 && month == 8) {
        zodiacalsing = 'Leo';
    }
    else if (day >= 23 && month == 8 || day <= 22 && month == 9) {
        zodiacalsing = 'Virgo';
    }
    else if (day >= 23 && month == 9 || day <= 22 && month == 10) {
        zodiacalsing = 'Libra';
    }
    else if (day >= 23 && month == 10 || day <= 22 && month == 11) {
        zodiacalsing = 'Escorpio';
    }
    else if (day >= 23 && month == 11 || day <= 21 && month == 12) {
        zodiacalsing = 'Sagitario';
    }
    else if (day >= 22 && month == 12 || day <= 19 && month == 1) {
        zodiacalsing = 'Capricornio';
    }
    else if (day >= 20 && month == 1 || day <= 18 && month == 2) {
        zodiacalsing = 'Acuario';
    }
    else if (day >= 19 && month == 2 || day <= 20 && month == 3) {
        zodiacalsing = 'Piscis';
    }
    else {
        console.log('Ingrese correctamente el dia y el mes. Por ejemplo: 20 de enero: para dia ingresar 20, y para mes 1.');
    }
    return zodiacalsing;
}
;
console.log(zodiacal(21, 6));
console.log(zodiacal(16, 1));
console.log(zodiacal(31, 5));
console.log(zodiacal(14, 10));



function paisCont(pais) {
    if ((pais === "España") || (pais === 'Francia') || (pais === 'Alemania') || (pais === 'Italia') || (pais === 'Portugal')) {
        console.log(pais + ' se encuentra en Europa');
    }
    else if ((pais === "Argentina") || (pais === 'Chile') || (pais === 'Estados Unidos') || (pais === 'Canada') || (pais === 'Uruguay')) {
        console.log(pais + ' se encuentra en America');
    }
    else if ((pais === "China") || (pais === 'Pakistan') || (pais === 'India') || (pais === 'Japon') || (pais === 'Corea')) {
        console.log(pais + ' se encuentra en Asia');
    }
    else if ((pais === "Egipto") || (pais === 'Nigeria') || (pais === 'Ghana') || (pais === 'Etiopia') || (pais === 'Marruecos')) {
        console.log(pais + 'se encuentra en Africa');
    }
    else if ((pais === "Australia") || (pais === 'Nueva Zelanda') || (pais === 'Fiji') || (pais === 'Tonga') || (pais === 'Palaos')) {
        console.log(pais + ' se encuentra en Oceania');
    }
    else {
        console.log('El pais no se encuentra en la base de datos');
    }
    ;
}
;
paisCont('España');
paisCont('Portugal');
paisCont('Argentina');
paisCont('Estados Unidos');
paisCont('China');
paisCont('Tonga');
paisCont('Egipto');


function isParOrNot(number: number){
    if(number % 2 == 0){
        console.log('El numero es par')

    }else{
        console.log('El numero es impar');
        
    }


};


isParOrNot(2);
isParOrNot(3);
isParOrNot(2000);
isParOrNot(1555);




