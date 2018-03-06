import './header.scss'
import Typed from 'typed.js';

$(document).ready(function () {
    if(document.documentElement.clientWidth <= 900) {
        $('.header-text > span').text('Создание современных и функциональных сайтов');
    }
});