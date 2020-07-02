$(function () {

    // var qBtn = $('.questions__item-btn');

    // qBtn.on('click', function () {
    //     qBtn.removeClass('on');
    //     $(this).addClass('on');
    // });

    // $('.questions__item-btn').on('click', function () {
    //     $('.questions__item-answer').removeClass('on');
    //     $(this).toggleClass("on");
    // });

    $('.questions__item').on('click', function () {
        $(this).toggleClass("on");
    });

    $('.header__btn').on('click', function () {
        $('.header__menu-list').toggleClass("block");
        $('.header__menu').toggleClass("block");
        $('.header__logo-inner').toggleClass("block");
    });





    // $('.questions__item').click(function (event) {
    //     // $('.on').removeClass('on');
    //     $(this).toggleClass('on');
    // });
});