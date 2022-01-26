
// body style
document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";

const card = document.createElement("div");
card.id = "wrapper";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
document.body.appendChild(card);

const cardImg = document.createElement("img");
cardImg.src= "/images/image-equilibrium.jpg";
cardImg.className = "cardImg";
cardImg.style.borderRadius = "10px";
cardImg.style.maxWidth = "300px";
cardImg.style.maxHeight = "300px";
document.body.appendChild(cardImg);

const title = document.createElement("h3");
title.innerText = "Equilibrium #3429";
title.className = "title";
title.style.color = "hsl(0, 0%, 100%)";
document.body.appendChild(title);

const subtitle = document.createElement("p");
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.className = "subtitle";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "18px";
subtitle.style.width = "300px";
document.body.appendChild(subtitle);

const etherium = document.createElement("img");
etherium.src = "/images/icon-ethereum.svg";
etherium.className = "pricePic";
document.body.appendChild(etherium);

const price = document.createElement("p");
price.innerText = "0.041 ETH";
price.className = "price";
price.style.color = "hsl(178, 100%, 50%)";
price.style.fontSize = "18px";
document.body.appendChild(price);

const clockImg = document.createElement("img");
clockImg.src = "/images/icon-clock.svg";
clockImg.className = "clockImg";
document.body.appendChild(clockImg);

const deadline = document.createElement("p");
deadline.innerText = "3 days left";
deadline.className = "deadline";
deadline.style.color = "hsl(215, 51%, 70%)";
deadline.style.fontSize = "18px";
document.body.appendChild(deadline);

const avatarImg = document.createElement("img");
avatarImg.src = "/images/image-avatar.png";
avatarImg.className = "avatar";
avatarImg.style.width = "100px";
avatarImg.style.height = "100px";
document.body.appendChild(avatarImg);

const madeBy = document.createElement("p");
madeBy.innerText = "creation of ";
madeBy.className = "madeBy";
madeBy.style.color = "hsl(215, 51%, 70%)";
madeBy.style.fontSize = "18px";
document.body.appendChild(madeBy);

const madeByName = document.createElement("p");
madeByName.innerText = "Jules Wyvern";
madeByName.className = "madeByName";
madeByName.style.color = "hsl(0, 0%, 100%)";
madeByName.style.fontSize = "18px";
document.body.appendChild(madeByName);



// Все стили по расположению карточки прописаны для обертки, 
// у самих карточек нет никаких CSS свойств для расположения внутри родителя.
//  Карточки должны быть независимыми: если скопировать карточку и добавить еще раз 
//  карточки адекватно отображаются внутри своего родителя