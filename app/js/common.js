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