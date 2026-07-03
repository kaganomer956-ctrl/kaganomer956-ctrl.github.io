const search=document.getElementById("videoSearch");

const filter=document.getElementById("videoFilter");

const cards=document.querySelectorAll(".video-card");

function updateVideos(){

const text=search.value.toLowerCase();

const category=filter.value;

cards.forEach(card=>{

const title=card.innerText.toLowerCase();

const tags=card.dataset.category;

const textMatch=title.includes(text);

const categoryMatch=

category==="all"||

tags.includes(category);

if(textMatch&&categoryMatch){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

search.addEventListener("keyup",updateVideos);

filter.addEventListener("change",updateVideos);
// LIKE & WATCH

const likeButtons=document.querySelectorAll(".like-btn");

likeButtons.forEach(btn=>{

let liked=false;

btn.addEventListener("click",()=>{

const span=btn.querySelector(".like-count");

let count=parseInt(span.innerText);

if(!liked){

count++;

liked=true;

btn.style.background="#ff2b2b";

}else{

count--;

liked=false;

btn.style.background="#1a1a1a";

}

span.innerText=count;

});

});

const videos=document.querySelectorAll("video");

videos.forEach(video=>{

const card=video.closest(".video-card");

if(!card) return;

const watch=card.querySelector(".watch-count");

let viewed=false;

video.addEventListener("play",()=>{

if(viewed) return;

viewed=true;

watch.innerText=parseInt(watch.innerText)+1;

});

});
