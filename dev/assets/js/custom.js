const burger = document.querySelector('.btn-burger');
const navigation = document.querySelector('.nav_list')

const toggleMenu =()=> {
burger.classList.toggle('open');
navigation.classList.toggle('show');
}


burger.addEventListener('click', toggleMenu)





Fancybox.bind("[data-fancybox]", {});

$('.single-item').slick();


const swiper = new Swiper('.slider_info', {  
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: false,
})
;