const creationListString = localStorage.getItem('creationList');
const creationList = JSON.parse(creationListString);

function createElementCreation(id, imgDesktop, imgMobilem, title) {
    const width = window.innerWidth;
    // presupunem initial ca suntem pe desktop si daca nu, setam pe mobile
    let screenType = 'desktop';
    if(width < 1200) {
        screenType = 'mobile'
    }

    const article = document.createElement('article');

    if(screenType === 'mobile'){
        article.style.backgroundImage = `url("${imgMobilem}")`
    } else{
        article.style.backgroundImage = `url("${imgDesktop}")`
    }

    const h3 = document.createElement('h3');
    h3.textContent = title;
   
    article.appendChild(h3);

    // in loc sa adaugam o anchora, putem sa ascultam la click-uri pe elementul de article
    article.addEventListener('click', () =>{
        // facem redirect la html-ul pentru afisarea unei creatii si includem un id in url ca sa identificam
        // pe ce creatie a dat click utilizatorul
        location.replace('/specificCreation.html?creationId=' + id);
    })

    return article;
}

function createCreationList(list) {
    const creationDiv = document.querySelector('.creations');
    creationDiv.innerHTML = '';

    list.forEach(element => {
        const titleCreation = element.title;
        const idCreation = element.id;
        const imgDesktop = element.imgPathDesktop;
        const imgMobile = element.imgPathMobile;
        const createdArticle = createElementCreation(idCreation, imgDesktop, imgMobile, titleCreation);
        creationDiv.appendChild(createdArticle)
    });
}

// re-creeam lista cand utilizatorul face resize la screen
window.addEventListener('resize', () =>{
    createCreationList(creationList);
}, true)

const list = creationList.slice(0, 8);

// creeamn lista initial cand pagina se incarca
createCreationList(list, window.innerWidth);

function totalCartItems(){
    const cartText = localStorage.getItem('cart');
    const cart = JSON.parse(cartText);
    const totalCountShop = document.querySelector('#totalShopCount');

    const listValues = Object.values(cart);

    const total = listValues.reduce((acc, shopCount) => acc + shopCount, 0);

    // let sum = 0;
    // for(let i = 0; i< listValues.length;i++){
    //     sum = sum + listValues[i];
    // }

    // console.log(sum);
    // console.log(total);
    totalCountShop.textContent = total;
}

totalCartItems();