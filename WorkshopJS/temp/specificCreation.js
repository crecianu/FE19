const creationListString = localStorage.getItem('creationList');
const creationList = JSON.parse(creationListString);

// contine string-ul de query params
// exemplu (?creationId=1&user='ciprian')
const queryString = location.search;
// URLSearchParams este o clasa ajutatoare care sparge string-ul de mai sus
// si ne da cateva functii ajutatoare sa preluam valorile care ne intereseaza
const urlParams = new URLSearchParams(queryString);

// asa luam o anumita valoarea pentru keya respectiva
// este mereu un string valoarea returnata
const creationId = urlParams.get('creationId');
// const titleKey = urlParams.get('title');

// cautam in lista de creatii, id-ul care corespunde cu cel pe care a apasat utilizatorul si l-am trimis in url
const foundCreation = creationList.find((item) => {
    return item.id === creationId;
})

const container = document.querySelector('.creation-detail');

// verificam daca nu cumva utilizatorul a modificat manual link-ul si a trimis un id gresit
if (foundCreation) {
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const details = document.createElement('p');

    title.textContent = foundCreation.title;
    img.setAttribute('src', foundCreation.imgPathDesktop);
    img.setAttribute('alt', foundCreation.title);
    details.textContent = foundCreation.details;
    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(details);

    const plusButton = document.querySelector('#plus');
    const minusButton = document.querySelector('#minus');

    const countSpan = document.querySelector('.shopCount');
    const cartText = localStorage.getItem('cart');
    const cart = JSON.parse(cartText);

    const prevCountForId = cart[creationId];
    if(prevCountForId) {
        countSpan.textContent = prevCountForId
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

  
    function addToLocalStorage(value) {
        const cartText = localStorage.getItem('cart');
        const cart = JSON.parse(cartText);
        cart[creationId] = value;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function plusOrMinus(operation) {
        const countSpan = document.querySelector('.shopCount');
        const countText = countSpan.textContent;
        const count = parseInt(countText);

        let showCount = 0;

        if (operation === 'plus') {
            showCount = count + 1;
        } else {
            if (count > 0) {
                showCount = count - 1;
            }
        }
        countSpan.textContent = showCount;

        addToLocalStorage(showCount);
        totalCartItems();
    }

    plusButton.addEventListener('click', function () {
        plusOrMinus('plus');
    })
    minusButton.addEventListener('click', function () {
        plusOrMinus('minus');
    })
} else {
    const notFound = document.createElement('h1');
    notFound.textContent = 'No creation found';
    container.appendChild(notFound);
}
