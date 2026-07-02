// ================================
// Yazı Yazma Efekti
// ================================

const words = [
"Web Developer",
"Cisco Student",
"Network Enthusiast",
"Future Full Stack Developer",
"Technology Lover"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type(){

if(!typing) return;

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(type,1500);

return;

}

}

else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(type,deleting?60:120);

}

type();


// ================================
// Scroll Animasyonu
// ================================

const cards = document.querySelectorAll(
".skill-card,.project-card,.goal-card,.network-card,.certificate-card,.blog-card,.info-card,.contact-card"
);

function reveal(){

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s";

});

window.addEventListener("scroll",reveal);

reveal();


// ================================
// Navbar Gölgesi
// ================================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.style.boxShadow="0 5px 25px rgba(0,0,0,.4)";

}

else{

nav.style.boxShadow="none";

}

});


// ================================
// Yukarı Çık Butonu
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.right="30px";
topBtn.style.bottom="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ================================
// Copyright Yılı
// ================================

console.log("Portfolio başarıyla yüklendi.");
