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

    $(".git image1").on('click',function(){
        $("#image1").slideup('slow');
        $(design).show(500);
        $(designh).animate({fontweight:'bolder',fontsize:'30px'})
    });
    $("#image2").on('click',function(){
        $("#image2").slideup('slow');
        $(design).show(500);
        $(designh).animate({fontweight:'bolder',fontsize: '30px'})
    });


});