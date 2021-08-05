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