   var swiper = new Swiper(".previewSwiper", {
       cssMode: true,
       loop: true,
       spaceBetween: 20,
       navigation: {
           nextEl: ".swiper-preview-next",
           prevEl: ".swiper-preview-prev",
       },
       pagination: {
           el: ".swiper-pagination",
       },
       mousewheel: true,
       keyboard: true,
   });

   var swiper = new Swiper(".goodsSwiper", {
       slidesPerView: 'auto',
       spaceBetween: 16,
       scrollbar: {
           el: ".swiper-scrollbar",
           draggable: true,
           hide: false,
           horizontalClass: 'custom-scrollbar'
       },
       breakpoints: {
           744: {
               centeredSlides: false,
           }
       }
   });

   document.addEventListener('DOMContentLoaded', function() {
       const btnSearchList = document.querySelectorAll('.btn_search'); // Все кнопки поиска
       const search = document.querySelector('.search');
       const searchCancel = document.querySelector('.search_cancel');

       // Перебираем все кнопки и вешаем обработчик
       btnSearchList.forEach(btn => {
           btn.addEventListener('click', function() {
               search.classList.toggle('search--active');
           });
       });

       // Обработчик для кнопки отмены
       searchCancel.addEventListener('click', function() {
           search.classList.remove('search--active');
       });
   });

   document.addEventListener('DOMContentLoaded', function() {
       const burger = document.querySelector('.header_burger');
       const body = document.body;

       burger.addEventListener('click', function() {
           body.classList.toggle('header_list-active');
       });
   });

   document.addEventListener('DOMContentLoaded', function() {
       const header = document.querySelector('.header');
       const scrollThreshold = 300; // Пикселей прокрутки для изменения шапки

       window.addEventListener('scroll', function() {
           if (window.scrollY > scrollThreshold) {
               // При прокрутке ниже порога - фиксируем шапку
               header.classList.add('header--fixed');
               header.classList.add('header--scrolled');
           } else {
               // При возврате вверх - возвращаем обычный вид
               header.classList.remove('header--fixed');
               header.classList.remove('header--scrolled');
           }
       });
   });

   document.querySelectorAll('.card_like').forEach(likeBtn => {
       likeBtn.addEventListener('click', function(e) {
           e.preventDefault(); // Если это ссылка (<a>)
           this.classList.toggle('card_like-activ'); // Добавляем/удаляем класс

       });
   });