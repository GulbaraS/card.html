

// let card = document.createElement("div");
// div.setAttribute('id', 'wrapper');
// card.style.backgroundColor = "hsl(216, 50%, 16%)";
// document.body.appendChild(card);

const cardImg = document.createElement("img");
cardImg.src= "/images/image-equilibrium.jpg";
document.body.appendChild(cardImg);

const title = document.createElement("h3");
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
document.body.appendChild(title);

const subtitle = document.createElement("p");
subtitle.innerText = "Our Equilibrium collection promotesbalance and calm";
subtitle.style.color = "hsl(215, 51%, 70%)";
document.body.appendChild(subtitle);

const etherium = document.createElement("img");
etherium.src = "/images/icon-ethereum.svg";
document.body.appendChild(etherium);

const price = document.createElement("p");
price.innerText = "0.041 ETH";
price.style.color = "hsl(178, 100%, 50%)";
document.body.appendChild(price);

const clockImg = document.createElement("img");
clockImg.src = "/images/icon-clock.svg";
document.body.appendChild(clockImg);

const deadline = document.createElement("p");
deadline.innerText = "3 days left";
deadline.style.color = "hsl(215, 51%, 70%)";
document.body.appendChild(deadline);

const avatarImg = document.createElement("img");
avatarImg.src = "/images/image-avatar.png";
document.body.appendChild(avatarImg);

const madeBy = document.createElement("p");
madeBy.innerText = "creation of ";
madeBy.style.color = "hsl(215, 51%, 70%)";
document.body.appendChild(madeBy);

const madeByName = document.createElement("p");
madeByName.innerText = "Jules Wyvern";
madeByName.style.color = "hsl(0, 0%, 100%)";
document.body.appendChild(madeByName);



// Все стили по расположению карточки прописаны для обертки, 
// у самих карточек нет никаких CSS свойств для расположения внутри родителя.
//  Карточки должны быть независимыми: если скопировать карточку и добавить еще раз 
//  карточки адекватно отображаются внутри своего родителя