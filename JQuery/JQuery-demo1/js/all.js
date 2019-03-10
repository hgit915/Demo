$(document).ready(function () {

    /** menu */

    $('.menu >li>a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');

        $(this).parent().find('ul').slideToggle();
        //其他層ul隱藏
        $(this).parent().siblings().find('ul').slideUp();

    });

    // light-box 問題    
    //
    // Q1:如何動態加入文字(點選直接帶入data-title的值)而不是寫死data-title(目前是塞文字至data-title)
    //
    //  $('.lesson-img').click(function (e) {
    //         e.preventDefault();
    //        $('.lesson-img a').attr('data-title', ' 本課程有以下特色 ．瞭解變數的使用方法 ．學習並操作DOM ．學習基本數學運算方法 ．套件的操作及運用 ');
    //     });
    //
    // Q2:原始圖片的尺寸很小，點選圖片後如何依據原始圖片長寬度等比例放大
    //   ps. 原本想說直接改lightbox.mix.css的圖片大小(有個參數值g),可是每個圖片的尺寸不一樣，無法固定值

    /** plugin */
    $('#slider').nivoSlider({
        effect: 'random' // Specify sets like: 'fold,fade,sliceDown' 

    });

    $('.top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

});