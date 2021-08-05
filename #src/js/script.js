@@include('cursor.js')
@@include('scroll.js')
@@include('parallax.js')

/* Включение всей анимации на странице с определенными параметрами */
var wow = new WOW({
    mobile: false, // отключать анимацию на мобильных устройствах ( зависит от размера экрана )
});
  wow.init(); // инициализация анимации 


// Прокрутка блока при прокрутки страницы 
$(window).scroll(function() {
    var offset = $(window).scrollTop();
    offset = offset * 0.2;

    $(".skating__circle-container").css({
        "-moz-transform": "rotate(" + offset + "deg)",
        "-webkit-transform": "rotate(" + offset + "deg)",
        "-o-transform": "rotate(" + offset + "deg)",
        "-ms-transform": "rotate(" + offset + "deg)",
        transform: "rotate(" + offset + "deg)"
    });
});

// Подвижный текст при прокрутки страницы
let atScroll = false;
    let parallaxTitle = document.querySelectorAll(".more__parallax-title");

    const scrollProgress = () => {
        atScroll = true;
    };

    const raf = () => {
        if (atScroll) {
            parallaxTitle.forEach((element, index) => {
                element.style.transform = "translateX(" + window.scrollY / 16 + "%)";
            });
            atScroll = false;
        }
        requestAnimationFrame(raf);
    };

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);

// Различная анимация 
TweenMax.to(".header__animate-1", 2, {
    x: "-180",
    y: "-100",
    scale: "2.4",
    ease: Expo.easeInOut,
});

TweenMax.to(".header__animate-2", 2, {
    x: "-180",
    y: "200",
    scale: "1.2",
    ease: Expo.easeInOut,
});

TweenMax.to(".header__animate-3", 2, {
    x: "180",
    y: "-240",
    scale: "1.6",
    ease: Expo.easeInOut,
});

TweenMax.to(".header__animate-4", 2, {
    x: "170",
    y: "240",
    scale: "0.8",
    ease: Expo.easeInOut,
}); 


TweenMax.from(".header__circle-shape", 2.4, {
    scale: "0",
    ease: Expo.easeInOut,
});
TweenMax.from(".header__circle-shape-2", 2.4, {
    scale: "0",
    ease: Expo.easeInOut,
});
TweenMax.from(".header__circle-shape-3", 2.4, {
    scale: "0",
    ease: Expo.easeInOut,
});
TweenMax.from(".header__circle-shape-4", 2.4, {
    scale: "0",
    ease: Expo.easeInOut,
});
TweenMax.from(".header__circle-shape-5", 2.4, {
    scale: "0",
    ease: Expo.easeInOut,
});

const circleType = new CircleType(document.getElementById('rotated'));   

TweenMax.from(".artist", 2, {
    delay: 5.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".watch", 2, {
    delay: 5.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".style__menu", 2, {
    delay: 5.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".rotatethis", 2, {
    delay: 6,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".social-media ul li", 2, {
    delay: 5.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.1);

TweenMax.staggerFrom(".listensong ul li", 2, {
    delay: 5.9,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.1);  

TweenLite.fromTo(".street__images-container h1", 0.3, {
    x:-6,
    y:2,
    opacity: 0,
}, 
{
    delay: 5,
    x: 6,
    y: -2,
    opacity: 1,
    ease:RoughEase.ease.config({
        strength:8,
        points:40, 
        template:Linear.easeNone, 
        randomize:false}),
    clearProps:"all"
});

TweenLite.fromTo(".street__images-container p", 0.3, {
    x:-6,
    y:2,
    opacity: 0,
}, 
{
    delay: 9,
    x: 6,
    y: -2,
    opacity: 1,
    ease:RoughEase.ease.config({
        strength:8,
        points:40, 
        template:Linear.easeNone, 
        randomize:false}),
    clearProps:"all"
});
