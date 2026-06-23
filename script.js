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
image:"images/banner1.jpg",
tag:"COMING SOON",
title:"FREEFIREXIPL SEASON 11",
text:"Registration Opening Soon",
link:"#"
},
{
image:"images/banner2.jpg",
tag:"UPDATE",
title:"TOURNAMENT SCHEDULE",
text:"Will Be Released Shortly",
link:"#"
},
{
image:"images/banner3.jpg",
tag:"SPECIAL EVENT",
title:"EXCLUSIVE REWARDS",
text:"Exciting Rewards Await Players",
link:"#"
}
];

let currentSlide = 0;

setInterval(() => {

    currentSlide++;

    if(currentSlide >= spotlightData.length){
        currentSlide = 0;
    }

    const item = spotlightData[currentSlide];

    if(document.getElementById("spotlightImage")){
        document.getElementById("spotlightImage").src = item.image;
        document.getElementById("spotlightTag").textContent = item.tag;
        document.getElementById("spotlightTitle").textContent = item.title;
        document.getElementById("spotlightText").textContent = item.text;
        document.getElementById("spotlightBanner").href = item.link;
    }

}, 5000);