const articleListString =  localStorage.getItem('articleList');
const objStorage =  localStorage.getItem('totalShopCount');

const articleList = JSON.parse(articleListString);
const totalShopCountObj = JSON.parse(objStorage);

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('articleId');


const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const shopCount = document.querySelector('.shopCount');
const addToFavoriteButton = document.querySelector('#addToFavorite');

const foundArticle = articleList.find((element) =>{
    return element.id === parseInt(articleId);
})

if(foundArticle !== undefined){
    const articleImg = document.querySelector('#specific-article-img');
    articleImg.setAttribute('src', foundArticle.img);
    articleImg.setAttribute('alt', foundArticle.alt);
    const articleTitle = document.querySelector('#specific-article-title');
    articleTitle.textContent = foundArticle.title;
    const articleDescription = document.querySelector('#specific-article-description');
    articleDescription.textContent = foundArticle.description;
    if(totalShopCountObj[articleId] === undefined){
        shopCount.textContent = 0;
    } else{
        shopCount.textContent = totalShopCountObj[articleId];
    }

    plusButton.addEventListener('click', () => {
        const prevValue = parseInt(shopCount.textContent);
        shopCount.textContent = prevValue + 1;
    })

    minusButton.addEventListener('click', () =>{
        const prevValue = parseInt(shopCount.textContent);
        if(prevValue > 0){
            shopCount.textContent = prevValue - 1;
        } else{
            shopCount.textContent = 0;
        }
    })

    addToFavoriteButton.addEventListener('click', () =>{
        const totalShopCount = document.getElementById('totalShopCount');
        let objStorage =  localStorage.getItem('totalShopCount');

        const totalShopCountObj = JSON.parse(objStorage);

        totalShopCountObj[articleId] = parseInt(shopCount.textContent);

        localStorage.setItem('totalShopCount', JSON.stringify(totalShopCountObj));

        const values = Object.values(totalShopCountObj);
        
        const total = values.reduce((acc, val) => {
            return acc + val;
        }, 0);

        totalShopCount.textContent = total;
    })

} else {
    alert('Nu am gasit articolul');
    document.querySelector('.actions').style.display= 'none';
}

