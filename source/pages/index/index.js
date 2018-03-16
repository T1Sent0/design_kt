import "./jquery.inputmask";
import Slider from 'swiper'

$(document).ready(function () {

    let sliderMaket = new Slider('.slider-maket', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: '1',
        loop: 'true',
        autoplay: {
            delay: 3000
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows : true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.slider-maket').on('mouseover', '.container-slider', function() {
        let slider = $(this);
        console.log(this);
        slider.autoplay.stop();
    });

        // $('').mouseover(function () {
        //     slider.autoplay.stop();
        // }).mouseout(function () {
        //     slider.autoplay.start();
        // })});)

    sliderMaket.init();

    let sliderForm = new Slider('.slider-form', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: '1',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows : true,
        },
        navigation: {
            nextEl: '.button-next-form',
            prevEl: '.button-prev-form',
        },
    });

    sliderForm.init()

    const bodySelector = $('body');

    const onClass = "on";
    const showClass = "show";

    $("input, textarea").on("checkval", function () {
        let label = $(this).prev("label");
        if (this.value !== "") {
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on("keyup", function () {
        $(this).trigger("checkval");
    }).on("focus", function () {
        console.log($(this));
        $(this).prev("label").addClass(onClass);
    }).on("blur", function () {
        $(this).prev("label").removeClass(onClass);
    }).trigger("checkval");

    bodySelector.on('click', '.close', desktopCloseContact);

    bodySelector.on('focus', 'input, textarea', focusFunc);
    bodySelector.on('focusout', 'input[type=tel]', focusOutTelFunc);

    const messageIcon = $('.message-icon');
    const mobileMenuBNlock = $('.mobile-menu');


    $(window).resize(function () {
        if (document.documentElement.clientWidth > 1000) {
            messageBlock.css('display', 'none');
            mobileMenuBNlock.css({display: 'none'});
            $('.burger').css('background', 'url(../img/mobile/all_services.svg) no-repeat').removeClass('close-burger');
        }
    });



    const messageBlock = $('.mes');

    function desktopCloseContact() {
        $('.container-form, .opacity').hide();
    }

    function focusFunc() {
        $(this).removeClass('error');
    }

    $('#send-form').submit(function () {
        let th = $(this);
        let data = $(this).serialize();
        let err = false;

        th.find('input[name=name], input[name=phone]').each(function () {
            if ($(this).val() === ''){
                $(this).addClass('error');
                err = true;
            }
        });

        if (!err) {
            $.ajax({
                type: "POST",
                url: "../php/send_message.php",
                data: data
            }).done(function() {
                $('#send-form').find('label').removeClass(showClass);
                $('#send-form, .hiden').hide();
                $('.success-two').show();
                setTimeout(showMenuAfterSendMessageTwo, 5000);
                $("#send-form").trigger("reset");
            })
        }
        return false;
    });

    $('#send-form-pensil-action').submit(function () {
        let th = $(this);
        let data = $(this).serialize();
        let err = false;

        th.find('input[type=tel], input[type=text]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('error');
                err = true;
            }
        });

        if (!err) {
            $.ajax({
                type: "POST",
                url: "../php/send_message.php",
                data: data
            }).done(function () {
                $('#send-form-pensil-action').find('label').removeClass(showClass);
                $('#send-form-pensil-action, .hiden').hide();
                $('.success-three').show();
                setTimeout(showMenuAfterSendMessageThree, 5000);
                $("#send-form-pensil-action").trigger("reset");
            })
        }
        return false;
    });

    function showMenuAfterSendMessageTwo() {
        $(".success-two").hide();
        $('#send-form, .hiden').show();
        $('#send-form').css({display: 'table'});
    }

    function showMenuAfterSendMessageThree() {
        $(".success-three").hide();
        $('#send-form-pensil-action, .hiden').show();
        $('#send-form-pensil-action').css({display: 'table'});
    }

    bodySelector.on('focus', 'input[name=phone]', mask);
    bodySelector.on('keydown', 'input[name=name]', blockEditSymbolLite);

    function mask() {
        $('input[name=phone]').inputmask({mask: "+7 (999) 999-99-99"});
    }


    function blockEditSymbolLite() {

        let valueRgx = $(this).val();

        let rgxp = /[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\;\\:\\?\\*\\=\\+\\~\\``]/g;



        if (rgxp.test(valueRgx)) {

            $(this).val("");

        }

    }

    function focusOutTelFunc() {
        if ($(this).val()) {

            let valueRgx = $(this).val();

            let rgxp = /[\\_\\]/g;

            if (rgxp.test(valueRgx)) {

                $(this).val("");
                $(this).addClass('error');
                err = true;
                return err;
            }
        }
    }
});