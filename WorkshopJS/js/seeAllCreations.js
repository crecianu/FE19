const articleListString =  localStorage.getItem('articleList');
const articleList = JSON.parse(articleListString);

const itemsPerPage = 7;
let currentPage = 0;

function createArticle(articol, isMobile){
    const anchor = document.createElement('a');
    const combineLink = articol.link + "?articleId=" + articol.id;
    anchor.setAttribute('href', combineLink);
    
    const article = document.createElement('article');
    
    const img =  document.createElement('img');
    if(isMobile){
        const replaceDesktop = articol.img.replace("desktop", "mobile");
        img.setAttribute('src', replaceDesktop);
    } else{
        img.setAttribute('src', articol.img);
    }
    
    img.setAttribute('alt', articol.alt);
    
    const h3 =  document.createElement('h3');
    h3.textContent = articol.title;

    const span = document.createElement('span');
    span.textContent = articol.price + 'lei';
    span.classList.add('price');
    
    article.appendChild(img);
    article.appendChild(span);
    article.appendChild(h3);
    anchor.appendChild(article);
    
    
    //const domList = document.getElementsByClassName('creations');
    const domList = document.getElementById('listCreation');
    if(domList !== null){
        domList.appendChild(anchor);
    } else{
        alert('Nu s-a gasit elementul de inserat');
    }
}

function createArticles(list, isMobile){
    const domList = document.getElementById('listCreation');
    domList.innerHTML = '';
    list.forEach((elementul) => {
        createArticle(elementul, isMobile);
    });
}

function checkIfMobile(list){
    if(window.innerWidth < 800){
        createArticles(list, true);
    } else{
        createArticles(list, false);
    }
}


window.addEventListener('resize', ()=>{
    // re-creez lista de fiecare data cand se schimba size-ul la width
    createPagination(articleList, currentPage);
});

function search(searchValue){
    const filterList = articleList.filter((element)=>{
        const lowerCaseTitle = element.title.toLowerCase();
        const lowerCasePrice = element.price.toLowerCase();
        return lowerCaseTitle.includes(searchValue) || lowerCasePrice.includes(searchValue);
    });
    currentPage = 0;
    createPagination(filterList, 0);
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () =>{
    const input = document.getElementById('search');
    const inputValue = input.value;
    search(inputValue.toLowerCase());
})

// const input = document.getElementById('search');
// input.addEventListener('input', (event) => {
//     search(event.target.value.toLowerCase());
// })

function createPagination(list, from){
    const paginationList = document.querySelector('.pagination');
    paginationList.innerHTML = '';

    const ul = document.createElement('ul');


    // slice ia doua capete si imparte lista intre acele capete

    // 0 -> 8 (0, 1, 2, 3, 4 ,5, 6, 7)
    // 8 -> 16 (8, 9, 10, 11, 12 , 13,  14, 15)
    // 16 -> 24
    // 24 -> 32

    // from 0 => (0 + 1) * 8 => 8
    // from 1 => (1 + 1) * 8 => 16
    const to = (from + 1) * itemsPerPage;

    // from = 0 => 0
    // from = 1 => 1 * 8 = 8
    // from = 2 => 2 * 8 = 16
    const calculateFrom = from * itemsPerPage;

    const sliceList = list.slice(calculateFrom, to);

    checkIfMobile(sliceList);


    // cream lista de pagini
    for(let i = 0; i < Math.ceil(list.length/itemsPerPage); i++){
        const li = document.createElement('li');
        li.textContent = i + 1;
        li.addEventListener('click', (event) =>{
            const page = parseInt(event.target.textContent) - 1;
            currentPage = page;
            // 0 || 1 || 2 || 3
            createPagination(list, page);
        })
        ul.appendChild(li);
    }
    paginationList.appendChild(ul);
}

//Starting point
createPagination(articleList, currentPage);


const minRangeInput = document.getElementById('minPriceRange');
const maxRangeInput = document.getElementById('maxPriceRange');
minRangeInput.addEventListener('change', (event) =>{
    const rangeValue = document.getElementById('minPriceRangeValue');
    const maxRangeValue = maxRangeInput.value;

    if(parseInt(event.target.value) <= parseInt(maxRangeValue)){
        rangeValue.textContent = event.target.value;
    } else{
        event.target.value = maxRangeValue;
        rangeValue.textContent = maxRangeValue;
    }
})

maxRangeInput.addEventListener('change', (event) =>{
    const rangeValue = document.getElementById('maxPriceRangeValue');
    const minRangeValue = minRangeInput.value;

    if(parseInt(event.target.value) >= parseInt(minRangeValue)){
        rangeValue.textContent = event.target.value;
    } else{
        event.target.value = minRangeValue;
        rangeValue.textContent = minRangeValue;
    }
})

function getLowerPrice(list){
    // let lowestPrice = Infinity;
    let lowestPrice = parseInt(list[0].price);

    list.forEach((element) =>{
        if(parseInt(element.price) <= lowestPrice){
            lowestPrice = parseInt(element.price);
        }
    })

    return lowestPrice;
}

function getHigherPrice(list){
    // let maxPrice = -Infinity;
    let maxPrice = parseInt(list[0].price);

    list.forEach((element) =>{
        if(parseInt(element.price) >= maxPrice){
            maxPrice = parseInt(element.price);
        }
    })

    return maxPrice;
}

minRangeInput.setAttribute('min', getLowerPrice(articleList));
minRangeInput.setAttribute('max', getHigherPrice(articleList));

maxRangeInput.setAttribute('min', getLowerPrice(articleList));
maxRangeInput.setAttribute('max', getHigherPrice(articleList));


const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}