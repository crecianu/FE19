// const obj = {
//     nume: 'Ciprian',
//     frate: {
//         nume: 'Ion',
//     }
// }

// const frati = obj.frati;

// console.log(frati.nume);


// console.log('Finish program');

// parseInt()
// Object.assign()
// prompt()
// console.log()

// console.log('Start');

// am definit functia
// function afiseaza(){
//     console.log('Prima functie');
//     for(let i =0; i< 10; i++){
//         console.log('i=', i);
//     }
// }

// afiseaza();
// afiseaza();
// afiseaza();
// console.log('Prima functie');
// for(let i =0; i< 10; i++){
//     console.log('i=', i);
// }
// console.log('Prima functie');
// for(let i =0; i< 10; i++){
//     console.log('i=', i);
// }
// console.log('Prima functie');
// for(let i =0; i< 10; i++){
//     console.log('i=', i);
// }

// console.log('Finish');

// function  afiseaza2(){
//     console.log('Afisez functia 2');
//     for(let i =0; i< 5;i++){
//         afiseaza();
//     }
// }

// afiseaza2();

// definim o functie cu PARAMETRU a si b
// function sum(a, b){
//     return a + b;

//     // return undefined;
// }

// cand apelam o functie, o apelam cu ARGUMENTELE care ne intereseaza
// a = 2
// b = 10
// const primaValoare = 40;
// const aDouaValoare = 50;

// const rezultat = sum(2, 10);
// sum(20, 10);
// sum(primaValoare, aDouaValoare); // => sum(40, 50)
// parseInt("10") || parseInt(val);


// const value = prompt("Ce faci?");
// console.log(value);

// console.log(rezultat * 4);


// const arr = [1, 2, 3, 4 , 5, 6];
// const arr2 = [10, 20, 30, 40, 50];

// let suma = 0;
// for(let i = 0; i< arr.length; i++){
//     // sum = sum + arr[i];
//     suma = sum(suma, arr[i]);
// }

// let suma2 = 0;
// for(let i = 0; i< arr2.length; i++){
//     // sum = sum + arr[i];
//     suma2 = sum(suma2, arr2[i]);
// }

// console.log(suma);
// console.log(suma2);

// elementele comune (for-ul si variabila suma)
// elementul diferit este array-ul 

// function calculateArraySum(arr){
//     let suma = 0;
//     // arr.length > 0
//     if(Array.isArray(arr)){
//         for(let i = 0; i< arr.length; i++){
//             suma = sum(suma, arr[i]);
//         }
//     }
//     return suma;
// }

// function showObj(obj){
//     if(obj.nume !== undefined){
//         console.log(obj.nume.varsta);
//     }
// }

// const rezultatArr1 = calculateArraySum(arr);
// const rezultatArr2 = calculateArraySum(arr2);

// console.log(rezultatArr1);
// console.log(rezultatArr2);

// const obiect = {
//     nume:{
//         varsta: 10
//     }
// }

// showObj(obiect);

// for(let i = 0; i< 10; i++){
//     console.log(i);
//     if(i === 5){
//         break;
//     }
// }

// function showNumbers(tilNumber){
//     // console.log(`Till number este: ${tilNumber}`);


//     if(tilNumber === undefined){
//         return null;
//     }

//     let sum = 0;
//     for(let i = 0; i< tilNumber; i++){
//         sum = sum + i;
//     }

//     if(sum > 10){
//         return 'Suma este foarte mare';
//     } else{
//         return 'Suma este mai mica';
//     }

//     // return undefined;
// }

// const rezult = showNumbers(2);

// console.log(rezult);



// MODALITATEA 1

// function sum(a, b){
//     return a + b;
// }

// MODALITATEA 2

// const sum = function (a, b) {
//     return a + b;
// }

// MODALITATEA 3
// ARROW Function
// const sum = (a , b) => {
//     return a + b;
// } 
// const sum = (a, b) => a + b;

// function sum(a, b){
//     return a + b + g;
// }

// console.log(sum(2, 2));

// console.log((![] + [])[+[]] +
// (![] + [])[+!+[]] +
// ([![]] + [][[]])[+!+[] + [+[]]] +
// (![] + [])[!+[] + !+[]])

// console.log("b" + "a" + +"a" + "a");



// Creati o functie care primeste ca argumente 
// doua numere naturale si il returneaza pe cel mai mic dintre ele.

// function numereNaturale(a, b){
//     if( a < b) {
//         return a;
//     } else if( a > b) {
//         return b;
//     } 
//     // else{return "Sunt egale";}

//     return "Sunt egale";
    
// }

// const rezultat = numereNaturale(5, 7);
// console.log(rezultat);

// Creati o functie care primeste ca argument un sir de caractere.
// Returnati un nou sir in care fiecare cuvant este scris cu 
// prima litera majuscula.

// "uite ce misto este afara";
// "Uite Ce Misto Este Afara";

// console.log(transform('iute'));

function transform(cuvant) {
    const literaMare =  cuvant.charAt(0).toUpperCase();
    // const literaMare = cuvant[0].toUpperCase();

    let cuvantNou = literaMare.concat(cuvant.slice(1));

    // let cuvantNou = literaMare;

    // // console.log("Cuvant nou la inceput: ", cuvantNou);
    // for(let i = 1; i < cuvant.length ; i++){
    //     // console.log("Litera la pasul  ",i," ", cuvant[i]);
    //     cuvantNou = cuvantNou.concat(cuvant[i]);
    //     // console.log("Cuvant nou in for: ", cuvantNou);
    // }

    return cuvantNou;
}



function propozitiiUpperCase(propozitie){
    const arrayDeCuvinte = propozitie.split(" ");

    // console.log("Array cuvinte ", arrayDeCuvinte);

    const newArray = [];
    for(let i =0; i< arrayDeCuvinte.length ;i++){
        const cuvantCuLiteraMare = transform(arrayDeCuvinte[i]);
        newArray.push(cuvantCuLiteraMare);
    }

    return newArray.join(' ');
}

const sirDeCaractere = "Uite Ce misto Este afara";

// propozitiiUpperCase(sirDeCaractere)

// console.log(propozitiiUpperCase(sirDeCaractere));

// const arrNumere = [2, 5, 6, 1, 9, 8];
// console.log(arrNumere.sort());

// console.log(sirDeCaractere);
// console.log(arrayDeCuvinte);




