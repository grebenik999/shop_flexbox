$(document).ready(function() {

    $(".toggle-mnu").click(function () {
        $(this).toggleClass("on");
        $(".navigation").slideToggle(300, function(){
            if($(this).css('display')==='none'){
                $(this).removeAttr('style')
            }
        });
        return false;
    });
});

$(document).ready(function() {

    $(".mob_btn").click(function () {
        $(this).toggleClass("on");
        $(".sub_mnu").slideToggle(300, function(){
            if($(this).css('display')==='none'){
                $(this).removeAttr('style')
            }
        });
        return false;
    });

});

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        roundLengths: true,
        autoplay: 5000,
        simulateTouch: true,
        paginationClickable: true,
        effect: 'fade'
    })
});