$(function() {  
    $("body").niceScroll({ // указываем, где будет работать скролл 
      scrollspeed: 16, // скорость прокрутки скролла 
      mousescrollstep: 16, // скорость прокрутки колесиком мыши 
      cursorcolor: "gray", // цвет скролла 
      cursorborder: ".5px solid box-shadow: 2px 4px 13px 2px rgba(34, 60, 80, 0.2);", // обводка скролла 
      zindex: 100000, // позиция по координате Z
    });
});