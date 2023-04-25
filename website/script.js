let menu= document.querySelector('#menu-icon');
let nav = document.querySelector('nav');

menu.onclick=() => {
    menu.classList.toggle('bx-x')
    nav.classList.toggle('open')
};

window.onscroll=() => {
    menu.classList.remove('bx-x')
    nav.classList.remove('open')
};

var swiper= new Swiper(".home-slider", {
    loop:true, 
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

var Swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


        inputContainers.forEach(inputContainer => {
            const input = inputContainer.querySelector('.input');
            const label = inputContainer.querySelector('label');
        
            input.addEventListener('focus', () => {
                label.classList.add('label-focus');
            });
        
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    label.classList.remove('label-focus');
                }
            });  
        });