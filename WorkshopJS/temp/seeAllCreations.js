const creationListString = localStorage.getItem('creationList');
const creationList = JSON.parse(creationListString);

const maxLengthPerPage = 8;

function createElementCreation(id, imgDesktop, imgMobilem, title) {
    const width = window.innerWidth;
    // presupunem initial ca suntem pe desktop si daca nu, setam pe mobile
    let screenType = 'desktop';
    if(width < 1200) {
        screenType = 'mobile'
    }

    const article = document.createElement('article');
    article.setAttribute('id', id);

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

function createCreationList(indexStart, list) {
    const creationDiv = document.querySelector('.creations');
    creationDiv.innerHTML = '';

    for(let i = indexStart; i < indexStart + maxLengthPerPage && i < list.length; i++) {
        const titleCreation = list[i].title;
        const idCreation = list[i].id;
        const imgDesktop = list[i].imgPathDesktop;
        const imgMobile = list[i].imgPathMobile;
        const createdArticle = createElementCreation(idCreation, imgDesktop, imgMobile, titleCreation);
        creationDiv.appendChild(createdArticle)
    }
}

function createPaginare(list){
    // per pagina sa fie cate 8 elemente
    const container = document.querySelector('.pagination');
    container.innerHTML = '';

    const ul = document.createElement('ul');
    console.log(list.length);
    const numarDePagini = Math.ceil(list.length / maxLengthPerPage);

    for(let i = 0; i < numarDePagini; i++){
        const li = document.createElement('li');
        li.textContent = i + 1;
        ul.appendChild(li);
        // li.addEventListener('click', (e) => {
        //     const pageNumber = e.target.textContent;
        //     console.log(pageNumber);
        //     const numberPage = parseInt(pageNumber);
        //     // 1 -> startIndex = 0
        //     // 2 -> sratIndex = 1 * 8 => 9
        //     const startIndex = (numberPage - 1) * maxLengthPerPage;
        //     createCreationList(startIndex, list)
        // });
    }

    ul.addEventListener('click', (e) => {
        const pageNumber = e.target.textContent;
        if(pageNumber.length === 1){
            const numberPage = parseInt(pageNumber);
            // 1 -> startIndex = 0
            // 2 -> sratIndex = 1 * 8 => 9
            const startIndex = (numberPage - 1) * maxLengthPerPage;
            createCreationList(startIndex, list)
        }
    });

    container.appendChild(ul);
}

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
createCreationList(0, creationList);
createPaginare(creationList)


const search = document.querySelector('#search-button');
search.addEventListener('click', () =>{
    const input = document.querySelector('#search');
    const valueSearch = input.value;

    const filterList = creationList.filter((item) =>{
        return item.title.toLowerCase().includes(valueSearch.toLowerCase())
    });
    createPaginare(filterList);
    createCreationList(0, filterList);
})