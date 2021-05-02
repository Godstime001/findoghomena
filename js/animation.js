const tl = gsap.timeline({ paused: true });
tl.fromTo(".bar, .bar1", { width: "0%"}, {width:"70%"});
tl.to(".bar2, .bar3", { width: "60%"}, "-=0.5");
tl.to(".bar4", {width:"45%"}, "-=0.5")
tl.to(".bar5, .bar6", {width:"40%"}, "-=0.5")
tl.to(".bar7", {width:"35%"}, "-=0.5")
tl.to("img", {transform : "scale(1)"}, "-=0.5")

window.addEventListener("scroll", () => {
    Toggletl(tl)

})

let skills = document.querySelector('.skills')

function Toggletl(tween) {
    let windowtop = window.scrollY;

    if (windowtop >= skills.offsetHeight-400) {
        setTimeout(()=>{
            console.log("o")

            tween.play() 
        }, 1500)

    }
}


$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 3000;
function hidePreloader() {
var preloader = $('#preloader');
    setTimeOut(()=> {
        preloader.fadeOut(preloaderFadeOutTime)
    }, 3000);
}
hidePreloader();
});
