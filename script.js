$(function(){
    let design= $("#design");
    let development= $("#development");
    let productmng= $("#productmng");
    let designh= $("#designh");
    let developmenth= $("#developmenth");
    let productmngh= $("#productmngh");

    $(design).hide();
    $(development).hide();
    $(productmng).hide();
// show onclick
    $(".image1").on('click',function(){
        $("image1").slideUp('slow');
        $(design).show(500);
        $(designh).animate({fontweight:'bolder',fontsize:'30px'})
    });
    $(".image2").on('click',function(){
        $("image2").slideUp('slow');
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
        $(design).hide(500);
        $(designh).animate({fontWeight:'normal',fontSize:'20px'})
    });
    $(".image2").on('click', function () {
        $(".image2").slideDown('slow');
        $(development).hide(500);
        $(developmenth).animate({fontWeight:'normal',fontSize:'20px'})
    });
    $(".image3").on('click', function () {
        $(".image3").slideDown('slow');
        $(productmng).hide(500);
        $(productmngh).animate({fontWeight:'normal',fontSize:'20px'})
    });
  


});