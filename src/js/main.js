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

    // $('.questions__item').click(function (event) {
    //     // $('.on').removeClass('on');
    //     $(this).toggleClass('on');
    // });
});