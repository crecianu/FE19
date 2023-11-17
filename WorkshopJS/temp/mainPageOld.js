const creationListString = localStorage.getItem('creationList');
const creationList = JSON.parse(creationListString);

// console.log(creationList);

function createElementCreation(id, imgSrc, imgDesktop, imgMobilem, title, screenType) {
    const article = document.createElement('article');
    // const anchor = document.createElement('a');

    article.setAttribute("id", id);
    const img = document.createElement('img');

    // article.style.backgroundImage = "url('" + path + "')";
    // if(imgDesktop && imgMobilem ){
        if(screenType === 'mobile'){
            img.setAttribute('src', imgMobilem)
        } else{
            img.setAttribute('src', imgDesktop)
        }
    // }else{
    //     const path = '../images/' + screenType + '/image-' + imgSrc + '.jpg';
    //     img.setAttribute('src', path)
    // }
  
    // anchor.setAttribute('href', '/specificCreation.html?creationId=' + id);
    // anchor.appendChild(img);
    img.setAttribute('alt', imgSrc);
    const h3 = document.createElement('h3');
    h3.textContent = title;
    article.appendChild(h3);
    // article.appendChild(anchor);
    article.appendChild(img);

    article.addEventListener('click', () =>{
        // pentru mai multi parametri, trebuie adaugat '&' intre ei
        // ex: ?title="ciprian"&creationId=1
        location.replace('/specificCreation.html?creationId=' + id);
    })

    return article;
}

function createCreationList(list, width) {
    let screenType = '';
    if(width >= 1200){
        screenType = 'desktop'
    } else{
        screenType = 'mobile'
    }

    const creationDiv = document.querySelector('.creations');
    creationDiv.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        // random function
        // const item = Math.floor(Math.random() * creationList.length);

        const titleCreation = list[i].title;
        const idCreation = list[i].id;
        // const imgSrc = list[i].imgSrc;
        const imgDesktop = list[i].imgPathDesktop;
        const imgMobile = list[i].imgPathMobile;

        const createdArticle = createElementCreation(idCreation,imgDesktop,imgMobile, titleCreation, screenType);
        creationDiv.appendChild(createdArticle)
    }
}

window.addEventListener('resize', () =>{
    const width = window.innerWidth;

    createCreationList(creationList, width);
}, true)



createCreationList(creationList, window.innerWidth);