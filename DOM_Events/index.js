// console.log('merge');
// console.log(document.body.children);

// const h2 = document.getElementById('title');
// const listH2 = document.getElementsByTagName('h2');
const h2 = document.querySelector('#title.box');
// listH2[0].textContent = 'Marius';
// console.log(listH2[0].textContent);
// h2.className = 'box-red';
// h2.classList.add('box-red');
// h2.classList.replace('box-red', 'box-green');
// console.log(h2);

function sum(){
    console.log(1+2);
}

function prod(){
    console.log(2*4);
}

function onClick(){
    sum();
    prod();
}

function mouseEnter(){
    console.log('Am facut hover');
}

// const button = document.querySelector('#press');
// const div = document.querySelector('.parent');
// const form = document.querySelector('.info');
// const remove = document.querySelector('#remove');
// // button.onclick = sum;
// // button.onclick = prod;
// button.addEventListener('click', (e) =>{
//     e.stopPropagation();
//     console.log('press button');
// });
// div.addEventListener('click', () =>{
//     console.log('press div');
// });
// form.addEventListener('click', () =>{
//     console.log('press form');
// });

// const anchor = document.querySelector('#googleLink');
// document.addEventListener('keydown', (e) =>{
//     console.log(e.key);
//     // e.preventDefault();
//     // console.log(e);
//     // window.location = 'https://youtube.com';
// });

// button.addEventListener('click', prod);

// remove.addEventListener('click', function(){
//     button.removeEventListener('click', sum);
//     button.removeEventListener('click', prod);

//     console.log('remove');
//     // button.remove();
// })

// document.addEventListener('mousemove', function(e){
//     // console.log(`x:${e.x} y:${e.y}`);
//     console.log('x:', e.x, " y:", e.y);
// })

// const buttonList = document.querySelectorAll('.bt');
// for(let i =0; i<buttonList.length;i++){
//     buttonList[i].addEventListener('click', (e) => {
//         // console.log(e.target);
//         if(e.target.getAttribute('id') === 'press'){
//             console.log('S-a facut click pe butonul de press');
//             e.target.textContent = 'Was press';
//         }else{
//             console.log('S-a facut click pe alt buton'); 
//         }
//     });
// }


// document.querySelector('.bt').addEventListener('mouseenter', ()=>{});
// const listLi = document.querySelectorAll('li');
// for(let i = 0; i< listLi.length;i++){
//     listLi[i].addEventListener('click', (e) =>{
//         console.log(e.target.textContent);
//     })
// }

// const ul = document.querySelector('ul');
// ul.addEventListener('click', (e) =>{
//     console.log("target", e.target);
//     console.log("currentTarget", e.currentTarget);
// })

// let hasAgreed =false;
// let inputNameValue ='';
// let inputSurNameValue ='';

// const obj = {
//     hasAgreed: false,
//     inputNameValue: '',
//     inputSurNameValue: '',
//     inputEmailValue: ''
// }

// // const name = document.querySelector('#name');
// // const surname = document.querySelector('#surname');
// const inputList = document.querySelectorAll('[type="text"]');
// const inputListEmail = document.querySelectorAll('[type="email"]');
// const inputCheckbox = document.querySelector('#accept');
// const submit = document.querySelector('[type="submit"]');

// inputCheckbox.addEventListener('click', (e) =>{
//     obj.hasAgreed = e.target.checked;
// })

// for(let i =0; i< inputList.length; i++){
//     inputList[i].addEventListener('input', (e) =>{
//         if(e.target.getAttribute('id') === 'name'){
//             obj.inputNameValue = e.target.value;
//         }
//         if(e.target.getAttribute('id') === 'surname'){
//             obj.inputSurNameValue=e.target.value;
//         }
//     })
// }

// for(let i =0; i< inputListEmail.length; i++){
//     inputListEmail[i].addEventListener('input', (e) =>{
//         if(e.target.getAttribute('id') === 'email'){
//             obj.inputEmailValue = e.target.value;
//         }
//     })
// }

// const userInfo = {
//     name:'',
//     surname: '',
//     email: '',
//     accept: false,
// };
// const submit = document.querySelector('[type="submit"]');
// const form = document.querySelector('form');
// const inputList = document.querySelectorAll('input');

// function eventForCheckbox(element){
//     element.addEventListener('click', (e) =>{
//         const nameAttribute = e.target.getAttribute('name');
//         userInfo[nameAttribute] = e.target.checked;
//     })
// }

// function eventForTextInput(element){
//     element.addEventListener('input', (e) =>{
//         const nameAttribute = e.target.getAttribute('name');
//         userInfo[nameAttribute] = e.target.value;
//     })
// }

// inputList.forEach((inputElement) =>{
//     if(inputElement.getAttribute('type') === 'checkbox'){
//         eventForCheckbox(inputElement);
//     } else {
//         eventForTextInput(inputElement);
//     }
// })

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     userInfo.name = e.target.name.value;
//     userInfo.surname = e.target.surname.value;
//     userInfo.email = e.target.email.value;
//     userInfo.accept = e.target.accept.checked;

//     console.log(userInfo);
// })


// submit.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(userInfo);
// })

let name = '';
let surname = '';

const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const submit = document.querySelector('[type="submit"]');

// inputName.addEventListener('blur', (e) =>{
//     if(e.target.value.length < 5){
//         e.target.classList.add('error');
//     } else{
//         e.target.classList.remove('error');
//     }
// })

inputName.addEventListener('input', (e) =>{
    if(e.target.value.length < 5){
        // e.target.classList.add('error');
        e.target.style.backgroundColor = 'red';
    } else{
        e.target.style.backgroundColor = '';
        // e.target.classList.remove('error');
    }
})

// inputName.addEventListener('input', (e) =>{
//     if(e.target.value.length < 5){
//         e.target.classList.add('error');
//     } else{
//         e.target.classList.remove('error');
//     }
// })

// inputName.addEventListener('input', (e) =>{
//     name = e.target.value;
// })

// inputSurname.addEventListener('input', (e) =>{
//     surname =  e.target.value;
// })


function checkSmallLetter(word){
    for(let i = 0; i<word.length; i++){
        if(word[i].toLowerCase() === word[i]){
            return true;
        }
    }
   return false;
}

const hasSmallLetter = checkSmallLetter('CIPRIAN');
console.log(hasSmallLetter);

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    const listInput = document.querySelectorAll('input');
    listInput.forEach((element) =>{
        // if(element.classList.contains('error')){
        //     alert('Ai eroare nu poti face submit');
        // }
        if(element.style.backgroundColor === 'red'){
            alert('Ai eroare nu poti face submit');
        }
    })
})

