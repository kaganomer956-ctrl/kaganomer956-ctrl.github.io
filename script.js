console.log("KO Football hazır!");

// Menü linklerine tıklayınca yumuşak kaydırma
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior:'smooth'
        });
    });
});
