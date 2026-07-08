// console.dir(document)

// let name = prompt('enter your name');
//
// let titleH1 = document.getElementById('title');
// console.log(titleH1);
// titleH1.innerText = 'Hello  ' + name + '!';

// let pElements = document.getElementsByTagName('p');
// console.log(pElements);
//
// console.log(pElements[0].innerText);
// console.log(pElements[1].innerText);
// let targetElements = document.getElementsByClassName('target');
// console.log(targetElements)
//
// for (const elementWithClassTarget of targetElements) {
//     // console.log(elementWithClassTarget);
//     // elementWithClassTarget.style.background = 'silver';
//
//     elementWithClassTarget.classList.add('pointer');
//     // elementWithClassTarget.classList.remove('target');
//
// }


// let div = document.createElement('div');
// div.innerHTML = `<b>okten school</b>`
//
// document.body.appendChild(div);


let products = [{
    title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
}, {
    title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
}, {
    title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
}, {
    title: 'tea', price: 15, image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
}, {
    title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
}, {
    title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
}, {
    title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
}, {
    title: 'tea', price: 15, image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
}];


for (const product of products) {
    let li = document.createElement("li");
    li.innerText = product.title;

    let ol = document.getElementById('list');
    ol.appendChild(li);
}


// let liElements = document.querySelectorAll('ol>li');
//
// console.log(liElements);
// for (const liElement of liElements) {
//     liElement.innerText = '!!!!!!';
// }

let title = document.getElementById('title');
console.dir(title)
title.onclick = function () {
    console.log('asdiafdsgf');
}



