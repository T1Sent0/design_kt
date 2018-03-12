import './block-content.scss';
import Swiper from 'swiper'

$(document).ready(function () {
    if(document.documentElement.clientWidth <= 900) {
        $('.create-company-style').html('<img src='+ require("../../pages/index/img/img_design.png")+'/>');
        $('.create_maket_page').html('<img src='+ require("../../pages/index/img/create_maket_page.png")+'/>');
        $('.create-conception').html('<img src='+ require("../../pages/index/img/create_conception.png")+'/>');
        $('.create-proto').html('<img src='+ require("../../pages/index/img/proto_image.png")+'/>');
        $('.hard-structure-image').addClass('swiper-container container-slider').html('<div class="swiper-wrapper">' +
            '<img class="swiper-slide" src=' + require("../../pages/index/img/dewelopment_hard_structure_site_part_one.png")+'>'+
            '<img class="swiper-slide" src=' + require("../../pages/index/img/dewelopment_hard_structure_site_part_one.png")+'>'+
            '</div>' +
            '<div class="nav-slide">' +
            '<div class="swiper-button-prev button-hard-prev"></div>' +
            '<div class="swiper-button-next button-hard-next"></div>' +
            '</div>');

        let slider = new Swiper('.hard-structure-image', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide: '0',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 0,
                slideShadows : true,
            },
            navigation: {
                nextEl: '.button-hard-next',
                prevEl: '.button-hard-prev',
            },
        });

        slider.init();
    }
});