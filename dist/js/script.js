(function () {
            
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();
"use strict"

// Ждём загрузку контента
window.onload = function() {
    const parallax = document.querySelector('.header');

    if(parallax) {
        // header
        const circle__shape__1 = document.querySelector('.header__circle-shape-2');
        const circle__shape__2 = document.querySelector('.header__circle-shape-3');
        const circle__shape__3 = document.querySelector('.header__circle-shape-4');
        const circle__shape__4 = document.querySelector('.header__circle-shape-5');
        const header__title = document.querySelector('.header__title');


        // ------------------------------------------------------------------------------------ //

        // Коэффициенты 
        
        // header
        const forCircle__1 = 3.5;
        const forCircle__2 = 3;
        const forCircle__3 = 2.5;
        const forCircle__4 = 3;
        const forHeaderTitle = 2.5;


        // ------------------------------------------------------------------------------------ //


        // Скорость
        const speed = 0.2;

        // Объявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // Передаем стили

            //header
            circle__shape__1.style.cssText = `transform: translate(${positionX / forCircle__1}%,${positionY / forCircle__1}%);`;
            circle__shape__2.style.cssText = `transform: translate(${positionX / forCircle__2}%,${positionY / forCircle__2}%);`;
            circle__shape__3.style.cssText = `transform: translate(${positionX / forCircle__3}%,${positionY / forCircle__3}%);`;
            circle__shape__4.style.cssText = `transform: translate(${positionX / forCircle__4}%,${positionY / forCircle__4}%);`;
            header__title.style.cssText = `transform: translate(${positionX / forHeaderTitle}%,${positionY / forHeaderTitle}%);`;

            // ------------------------------------------------------------------------------------ //

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {

            // Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Получаем проценты 
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    } 
}
$(function() {  
    $("body").niceScroll({ // указываем, где будет работать скролл 
      scrollspeed: 16, // скорость прокрутки скролла 
      mousescrollstep: 16, // скорость прокрутки колесиком мыши 
      cursorcolor: "gray", // цвет скролла 
      cursorborder: ".5px solid box-shadow: 2px 4px 13px 2px rgba(34, 60, 80, 0.2);", // обводка скролла 
      zindex: 100000, // позиция по координате Z
    });
});

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
