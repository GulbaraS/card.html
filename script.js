
// body style
document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";

// div wrapper
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
document.body.appendChild(wrapper);

//card
const card = document.createElement("div");
card.className = "card";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.padding = "20px";
card.style.borderRadius = "15px";
card.style.boxShadow =
  " 3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";
wrapper.appendChild(card);


const cardImg = document.createElement("img");
cardImg.src= "/images/image-equilibrium.jpg";
cardImg.className = "cardImg";
cardImg.style.borderRadius = "10px";
cardImg.style.maxWidth = "300px";
cardImg.style.maxHeight = "300px";
card.appendChild(cardImg);


const title = document.createElement("h3");
title.innerText = "Equilibrium #3429";
title.className = "title";
title.style.color = "hsl(0, 0%, 100%)";
card.appendChild(title);


const subtitle = document.createElement("p");
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.className = "subtitle";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "18px";
subtitle.style.width = "300px";
card.appendChild(subtitle);


const etherium = document.createElement("img");
etherium.src = "/images/icon-ethereum.svg";
etherium.className = "pricePic";
card.appendChild(etherium);


const price = document.createElement("p");
price.innerText = "0.041 ETH";
price.className = "price";
price.style.color = "hsl(178, 100%, 50%)";
price.style.fontSize = "18px";
card.appendChild(price);


const clockImg = document.createElement("img");
clockImg.src = "/images/icon-clock.svg";
clockImg.className = "clockImg";
card.appendChild(clockImg);


const deadline = document.createElement("p");
deadline.innerText = "3 days left";
deadline.className = "deadline";
deadline.style.color = "hsl(215, 51%, 70%)";
deadline.style.fontSize = "18px";
card.appendChild(deadline);

const avatarImg = document.createElement("img");
avatarImg.src = "/images/image-avatar.png";
avatarImg.className = "avatar";
avatarImg.style.width = "50px";
avatarImg.style.height = "50px";
avatarImg.style.borderRadius = "50%";
avatarImg.style.border = "1px solid white";
card.appendChild(avatarImg);


const madeBy = document.createElement("p");
madeBy.innerText = "creation of ";
madeBy.className = "madeBy";
madeBy.style.color = "hsl(215, 51%, 70%)";
madeBy.style.fontSize = "18px";
card.appendChild(madeBy);


const madeByName = document.createElement("p");
madeByName.innerText = "Jules Wyvern";
madeByName.className = "madeByName";
madeByName.style.color = "hsl(0, 0%, 100%)";
madeByName.style.fontSize = "18px";
card.appendChild(madeByName);


