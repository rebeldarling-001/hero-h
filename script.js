let intro = document.getElementById("intro-screen");
let home = document.getElementById("main-home");

// Splash screen (only on home page)
if (intro && home) {

    if (!sessionStorage.getItem("splashShown")) {

        sessionStorage.setItem("splashShown", "true");

        setTimeout(() => {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";
home.style.display = "block";

            }, 1000);

        }, 3000);

    } else {

       intro.style.display = "none";
home.style.display = "block";

    }

}

function toggleMenu(){

    let menu = document.getElementById("dropdown-menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }

}

const spotlightData = [
{
image:"images/mi.jpg",
tag:"COMING SOON",
title:"FREEFIREXIPL SEASON 11",
date:"Registration Opens Soon",
text:"Bigger battles, stronger teams, exciting matches.",
link:"#"
},
{
image:"images/banner2.jpg",
tag:"UPDATE",
title:"TOURNAMENT SCHEDULE",
date:"Coming This Week",
text:"Official match schedule releasing shortly.",
link:"#"
},
{
image:"images/banner3.jpg",
tag:"SPECIAL EVENT",
date:"Limited Event",
title:"EXCLUSIVE REWARDS",
text:"Play and win exclusive tournament rewards.",
link:"#"
}
];

let currentSlide = 0;

function showSlide(){
    const item = spotlightData[currentSlide];

    document.getElementById("spotlightImage").src = item.image;
    document.getElementById("spotlightTag").textContent = item.tag;
    document.getElementById("spotlightTitle").textContent = item.title;
    document.getElementById("spotlightDate").textContent = item.date;
    document.getElementById("spotlightText").textContent = item.text;
    document.getElementById("spotlightBanner").href = item.link;
}

function nextSlide(){

    if(currentSlide === spotlightData.length - 1){

        currentSlide = spotlightData.length - 2;
        showSlide();

        setTimeout(() => {

            currentSlide = 0;
            showSlide();

        }, 300);

    }else{

        currentSlide++;
        showSlide();

    }
}

function prevSlide(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = spotlightData.length - 1;
    }
    showSlide();
}

setInterval(nextSlide, 4000);



let startX = 0;

const card = document.querySelector('.spotlight-card');

card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

card.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextSlide(); // swipe left
    }

    if(endX - startX > 50){
        prevSlide(); // swipe right
    }
});

// SHOW WORLD AFTER LOADING
setTimeout(() => {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("world-screen").style.display = "block";
}, 3000);


// ENTER BUTTON FUNCTION
function enterArena() {

    const world = document.getElementById("worldMap");

    // simple zoom effect
    world.style.transform = "scale(2)";
    world.style.transition = "2s";

    setTimeout(() => {
        document.getElementById("world-screen").style.display = "none";
        document.getElementById("main-home").style.display = "block";
    }, 2000);
}
