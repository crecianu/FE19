// const varsta = 21;

// if(varsta > 19){
//     console.log('Am varsta mai mare de 19 de ani');
//     const suma = 20 + 0;
//     if(suma > 40){
//         console.log('Afisez suma:', suma);
//     }
// } else if(varsta === 21){
//     console.log('Am varsta mai mica de 19 de ani');
// }


// console.log('Am terminat programul');

// const varstaString = prompt('Introdu o varsta'); // tipul de data este string;
// const varstaNumber = parseInt(varstaString);

// // isNaN(varstaNumber);
// if(isNaN(varstaNumber)) {
//     console.log('Ai introdus un numar gresit');
// } else {
//     switch(varstaNumber){
//         case 10:
//         case 11:
//         case 12:
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:{
//             console.log('Sunt inca copil');
//             break;
//         }
//         case 18: {
//             console.log('Am ajuns adult');
//             break;
//         }
//         case 40: {
//             console.log('Am prea multe responsabilitati');
//             break;
//         }
//         default:{
//             console.log('Nu ma incadrez in categoriile de case');
//         }
//     }
// }

// 1. prima data se executa: let contor = 5;
// 2. se face verificarea conditiei de adevar: contor < 10
// 3. se executa bucla din interiorul for-ului
// 4. se duce si incrementeaza contorul: contor = contor + 1
// 5. Repeta pasi 2 si 4 pana cand conditia de la 3 este adevaratata

// 1 / 2 = 0 rest 1; 1 === 0
// 2 / 2 = 1 rest 0; 0 === 0
// 3 / 2 = 1 rest 1; 1 === 0
// 4 / 2 = 2 rest 0; 0 === 0

// contor++ => contor = contor + 1;
// contor+=5 => contor = contor + 5;

// for(let contor = 0; contor < 50; contor+=5) {
//     // if(contor % 2 === 0){
//     //     console.log('Numarul ', contro, ' este par');
//     // } else{
//     //     console.log('Numarul ', contro, ' este impar');
//     // }

//     // if(contor % 5 === 0){
//     //     console.log('Numarul ', contor, 'este divizibil cu 5');
//     // } else{
//     //     console.log(contor);
//     // }
//     console.log(contor);
// }

// let contor = 50;
// while(contor < 50){
//     console.log(contor);
//     if(contor < 20){
//         contor++;
//     } else{
//         for(let i = 0; i< 10; i++){
//             console.log('Intru aici de mai multe ori');
//         }
//         contor = contor + 5;
//     }

//     if(contor === 40){
//         break;
//     }
// }

// let contor = 0;
// do {
//     console.log(contor);
//     if(contor < 20){
//         contor++;
//     } else{
//         for(let i = 0; i< 10; i++){
//             console.log('Intru aici de mai multe ori');
//         }
//         contor = contor + 5;
//     }

//     if(contor === 40){
//         break;
//     }
// }while(contor < 50);


// console.log('Contro de final', contor);
// console.log('Am terminat bucla');

const array = [1, 2, "tata", 3, true , 4, "Ciprian", 5];

// for(let index = 0; index < array.length; index++){
//     console.log(array[index]);
// }

// let index = 0;
// while(index < array.length){
//     console.log(array[index]);
//     index++
// }


// 1 + 2 + 3 + 4 + 5 = 15 / 5 = 3

const familieMirelArray = ['Marcel', 'Ionel', 'Maria'];

// console.log(familieMirelArray[0])

// const familieMirel = {
//     tata: 'Marcel',
//     frati: ['Ionel', 'Ioana', 'Camelia'],
//     mama: 'Maria',
// }

// console.log(familieMirel.mama)

// const buletinMircea = {
//     cnp: '1231512431312',
//     nume: 'Popescu',
//     prenume:'Mircea',
//     loculNasteri: 'Iasi',
//     adresa: 'Str. Munci nr 5'
// }

// key = nume sau prenume sau cnp sau ...
// console.log(buletinCiprian[key]);
// console.log(buletinCiprian.key);
// console.log(buletinCiprian['cnp']);

// if(key === 'nume'){
//     console.log(buletinCiprian.nume);
// } else if(key === 'prenume'){
//     console.log(buletinCiprian.prenume);
// }else if(key === 'cnp'){
//     console.log(buletinCiprian.cnp);
// }else if(key === 'loculNasteri'){
//     console.log(buletinCiprian.loculNasteri);
// } else if(key === 'adresa'){
//     console.log(buletinCiprian.adresa);
// } else{
//     console.log(' Nu avem nici o informatie');
// }


// console.log(buletinCiprian.nume);
// console.log(buletinCiprian.prenume);
// console.log(buletinCiprian['nume']);
// console.log(buletinCiprian['prenume']);

// const key = prompt('Ce informatie vrei sa afisezi?');

// const buletinCiprian = {
//     cnp: '12346677',
//     nume: 'Recianu',
//     prenume:'Ciprian',
//     loculNasteri: 'Suceava',
//     adresa: 'Str. Nucilor nr 4'
// }

// console.log("Before change ", buletinCiprian.nume);

// buletinCiprian.nume = 'Popescu';

// console.log("After change ",buletinCiprian.nume);

// console.log("Varsta Before: ", buletinCiprian.varsta);

// buletinCiprian.varsta = 20;

// console.log("Varsta After: ", buletinCiprian.varsta);

// console.log(buletinCiprian);

// if(buletinCiprian.varsta !== undefined){

// }

// const buletinNouNascut = {};

// buletinNouNascut.nume = 'Recianu';
// buletinNouNascut['prenume'] = 'Cip';
// buletinNouNascut['adresa'] = 'Iasi';


// console.log(buletinNouNascut);

// const familii = {
//     familiaA: {
//         nume: 'Familia A',
//         membri: ['Marcel', 'Mihai']
//     },
//     familiaB: {
//         nume: 'Familia B',
//         membri: ['Mihnea', 'Mirel', 'Marian']
//     },
//     familiaC: {
//         nume: 'Familia C',
//         membri: ['Mirel']
//     },
//     familiaD: {
//         nume: 'Familia D',
//         membri: ['Ioana']
//     },
//     familiaE: {
//         nume: 'Familia E',
//         membri: ['Gabriel']
//     },
// }

// const arrayKeys = ['familiaA', 'familiaB'];
// console.log('Stiu cheile: ', arrayKeys);
// const arrayKeysNew = Object.keys(familii);
// console.log('Nu stiu cheile: ', arrayKeysNew)


// for(let key = 0; key < arrayKeysNew.length; key++ ){

//     const familyKey = arrayKeysNew[key]; // familiaA || familiaB
//     const familyObj = familii[familyKey];

//     console.log('Familia: ', familyObj.nume);
//     for(let i = 0; i < familyObj.membri.length; i++){
//         console.log("Membri: ", familyObj.membri[i]);
//     }
// }



// for(let i = 0; i < familii.familiaB.membri.length; i++){
//     // console.log('Familia: ', familii.familiaB.nume);
//     console.log("Membri: ", familii.familiaB.membri[i]);
// }


// poz1({}) poz2([]) poz3 poz4 poz5

// const A = {
//     nume:'Recianu',
//     prenume: 'Ciprian',
//     frati: ['Marcelino', 'Daria']
// };

// const Buletin = {
//     adresa: 'Iasi',
//     nume: 'Popi'
// }

// const B = A; //referentiere
// const C = Object.assign({}, A);
// const C = Object.assign(Buletin, A);

// console.log("A= ", A);
// console.log("B= ", B);

// B.prenume = 'Marcel';

// console.log("A= ", A); // {nume:'Recianu',prenume: 'Ciprian'}
// console.log("B= ", B); // {nume:'Recianu',prenume: 'Marcel'}

// A.nume = 'Popescu';
// A.frati[0] = 'Panivino';

// console.log("A= ", A); 
// console.log("B= ", B);

// C.varsta = 10;

// console.log("A= ", A); 
// console.log("B= ", B);
// console.log("C= ", C);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1 = ', arr1);
// console.log('arr2 = ', arr2);

// arr2.push([5, 6]);

// console.log('arr1 = ', arr1);
// console.log('arr2 = ', arr2);

const carte1 = {
    titlu: 'titlu carte 1',
    autor: 'autor carte 1',
    citit: true
};
const carte2 = {
    titlu: 'titlu carte 2',
    autor: 'autor carte 2',
    citit: false
};
const carte3 = {
    titlu: 'titlu carte 3',
    autor: 'autor carte 3',
    citit: true
};

const carti = [];
carti.push(carte1, carte2, carte3);

console.log(carti);

// titlu carte 1 by autor carte 1
// console.log(carti[0].titlu, ' by ', carti[0].autor);
// console.log(carti[1].titlu, ' by ', carti[1].autor);
// console.log(carti[2].titlu, ' by ', carti[2].autor);

// Daca a fost citita: => Cartea a fost citita
// Daca nu a fost citita: => Cartea nu a fost citita

for(let i = 0;i < carti.length;i++){
    const carte = carti[i];
    console.log(carte.titlu, ' by ', carte.autor);

    if(carti[i].citit){
        console.log('Cartea a fost citita');
    } else{
        console.log('Cartea nu a fost citita')
    }
}