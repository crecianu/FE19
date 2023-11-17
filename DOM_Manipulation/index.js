// function sayHello(message, transformFn){
//     const transformedMessage = transformFn(message);
//     console.log(transformedMessage);
// }

// function upperCaseMessage(message){
//     const upperMessage = message.toUpperCase();
//     return upperMessage;
// }

// function lowerCaseMessage(message){
//     const lowerMessage = message.toLowerCase();
//     return lowerMessage;
// }

// sayHello("Salut", upperCaseMessage);
// sayHello("SALUT", lowerCaseMessage);

// const newArray = arr.map(function(el){
//     return el + 2;
// })

// function map(arr, transformFn){
//     let newArray = [];
//     for(let i =0; i< arr.length; i++){
//         const newElement = transformFn(arr[i]);
//         newArray.push(newElement);
//     }

//     return newArray;
// }

// const arr = [5, 8, 15, 30, 100, 10 ];

// function find(arr, findFn){
//     for(let i =0; i< arr.length; i++){
//         const condition = findFn(arr[i]);
//         if(condition){
//             return arr[i];
//         }
//     }

//     return null;
// }

// function findGreaterThan15(el){
//     return el >= 15;
// }

// function findGreaterThan8(el){
//     return el >= 8;
// }

// const foundElement = arr.find(findGreaterThan8)

const obj = {
  nume: "red",
};

obj.nume = "green";
obj.nume = "magenta";

// console.log(foundElement);

// alert('Hello');

// console.log(document);
// document.body.className = "bg-green";

// getElementById returneaza un singur element;
// const divElement = document.getElementById('el');

// getElementsByTagName returneaza un array de elemente;
// const divElement = document.getElementsByTagName('div');

// getElementsByClassName returneaza un array de elemente;
// const divElement = document.getElementsByClassName('bg-red');
// console.log(divElement);
// for(let i = 0; i< divElement.length; i++){
//    // divElement[i].style = "background-color: magenta; margin-left: 15px";

//     divElement[i].style.backgroundColor = 'magenta';
//     divElement[i].style.marginLeft = '15px';
// }

// const style = {};
// style.backgroundColor = 'magenta';
// style.marginLeft = '15px';
// console.log(style);

// const pElement = document.querySelectorAll('.card.bg-red');
// // const pElement = divElement[0].querySelectorAll('p');
// for(let i=0; i< pElement.length; i++){
//     pElement[i].style.fontSize='30px';
// }

// const ul = document.querySelector('ul');

// const middleChild = Math.ceil(ul.children.length / 2);

// ul.children[middleChild].style.backgroundColor='red';

// ul.firstElementChild.nextElementSibling.style.backgroundColor='green';

// trebuie sa construim o functie,
// care primeste un array de lucruri de facut
// si le afiseaza in html

const arrMancare = ["Luat paine", "Luat Oua", "Luat carne", "Luat dulciuri"];
const arrHaine = ["Luat papuci", "Luat ciorapi", "Luat pluze"];

const morometi = {
    title: 'Morometi',
    author: 'Marin Preda',
    img: 'https://cinepub.ro/wp-content/uploads/2017/11/Morometii-feature.jpg'
}

const mara = {
    title: 'Mara',
    author: 'Ion Slavici',
    img: 'https://cdn4.libris.ro/img/pozeprod/371/370710-1.jpg'
}

const ion = {
    title: 'Ion',
    author: 'Liviu Rebreanu',
    img: 'https://cdn4.libris.ro/img/pozeprod/1164/1163390-1.jpg'
}

const listaCarti = [morometi, mara, ion];


const ulMacare = document.querySelector("#lista-mancare");
const ulHaine = document.querySelector("#lista-haine");
const ulCarti = document.querySelector("#lista-carti");

// let html = ``;

// arrMancare.forEach((el) =>{
//     html = html + `
//     <li>
//         <h2>${el}</h2>
//     </li>
//     `;
// })

// ulMacare.innerHTML = html;


function createElementWithH2(text, li){
    const h2 = document.createElement("h2");
    h2.textContent = text;
    // h2.id = 'test';
    h2.setAttribute('id', text);
    // h2.setAttribute('class', 'bg-red');
    li.appendChild(h2);
}

function createElementSimple(text, li){
    const h3 = document.createElement("h3");
    h3.textContent = text;
    li.appendChild(h3);

    //li.textContent = text;
}

function createBookElement(el, li){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');

    h2.textContent = el.title;
    h3.textContent = el.author;
    img.setAttribute('src', el.img);
    img.setAttribute('alt', el.title);

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(img);
    div.classList.add('box');

    li.appendChild(div);
}

function addToList(list, parrent, createElementFn) {
    list.forEach(function(el){
        const li = document.createElement("li");
        createElementFn(el, li)
        parrent.appendChild(li);
    })
}

addToList(arrMancare, ulMacare, createElementWithH2);
addToList(arrHaine, ulHaine, createElementSimple);
addToList(listaCarti, ulCarti, createBookElement);

// const firstChild = ulMacare.firstElementChild;
// ulMacare.removeChild(firstChild);
// ulMacare.lastElementChild.remove();
// console.log(firstChild);

// const hasAttribute = ulMacare.hasAttribute('id'); 
// if(hasAttribute){
//     console.log(ulMacare.getAttribute('id'));
// }
// ulMacare.removeChild();
// console.log(hasAttribute);

// ulMacare.className = 'bg-red font';
// ulMacare.className = 'font';
ulMacare.classList.add('bg-red');
ulMacare.classList.add('font');
ulMacare.classList.replace('bg-red','bg-green');
