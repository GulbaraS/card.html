

let card = document.createElement("div");
// div.setAttribute('id', 'wrapper');
// document.body.appendChild(div);

const cardImg = document.createElement("img");
cardImg.src= "/images/image-equilibrium.jpg";
document.body.appendChild(cardImg);

const title = document.createElement("h3");
title.innerText = "Equilibrium #3429";
document.body.appendChild(title);

const subtitle = document.createElement("p");
subtitle.innerText = "Our Equilibrium collection promotesbalance and calm";
document.body.appendChild(subtitle);

const etherium = document.createElement("img");
etherium.src = "/images/icon-ethereum.svg";
document.body.appendChild(etherium);

const price = document.createElement("p");
price.innerText = "0.041 ETH";
document.body.appendChild(price);

const clockImg = document.createElement("img");
clockImg.src = "/images/icon-clock.svg";
document.body.appendChild(clockImg);

const deadline = document.createElement("p");
deadline.innerText = "3 days left";
document.body.appendChild(deadline);

const avatarImg = document.createElement("img");
avatarImg.src = "/images/image-avatar.png";
document.body.appendChild(avatarImg);

const madeBy = document.createElement("p");
madeBy.innerText = "creation of Jules Wyvern";
document.body.appendChild(madeBy);



// Все стили по расположению карточки прописаны для обертки, 
// у самих карточек нет никаких CSS свойств для расположения внутри родителя.
//  Карточки должны быть независимыми: если скопировать карточку и добавить еще раз 
//  карточки адекватно отображаются внутри своего родителя