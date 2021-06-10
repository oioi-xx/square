$(document).ready(function(){
     AOS.init();
    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        direction: getDirection(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          },
        },
      });

      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 500 ? 'vertical' : 'horizontal';

        return direction;
      }
});