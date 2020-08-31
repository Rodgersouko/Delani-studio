$(function(){
    let design= $("#design");
    let development= $("#development");
    let productmng= $("#productmng");
    let designh= $("#designh");
    let developmenth= $("#developmenth");
    let productmngh= $("#productmngh");
    let delani=$(".delani");

    $(design).hide();
    $(development).hide();
    $(productmng).hide();
    $(delani).hide();
// show onclick
    $(".image1").on('click',function(){
        $(".image1").slideUp('slow');
        $(design).show(500);
        $(designh).animate({fontweight:'bolder',fontsize:'30px'})
    });
    $(".image2").on('click',function(){
        $(".image2").slideUp('slow');
        $(development).show(500);
        $(developmenth).animate({fontweight:'bolder',fontsize:'30px'})
    });
    $(".image3").on('click',function(){
        $("image3").slideUp('slow');
        $(productmng).show(500);
        $(productmngh).animate({fontweight:'bolder',fontsize:'30px'})
    });

// hide onclick
    $(".image1").on('click', function () {
        $(".image1").slideDown('slow');
        $(image1).hide(10000);
        $(designh).animate()
    });
    $(".image2").on('click', function () {
        $(".image2").slideDown('slow');
        $(development).hide(10000);
        $(developmenth).animate()
    });
    $(".image3").on('click', function () {
        $(".image3").slideDown('slow');
        $(productmng).hide(10000);
        $(productmngh).animate()
    });    

        $('.port').hover(function(){
        // $('.port').hide();
        $('.delani').slideToggle('1000');
     });

    $('.delani').hover(function(){
        // $('.delani').hide();
        $('.port').show('slow');
     });
  
});