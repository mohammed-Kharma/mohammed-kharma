$(function(){
//   $(".prot-slideright").hide();
//   $(".prot-slideright div:first").css("display","block");
  $("ol li a").click(function(event){
    var index = $(this).index();
    $(".ss").hide();
    $(".ss").eq(index).show(1000);
  });
  $(".text .section:first").show();
  $(".list ul li").click(function(event){
    var index = $(this).index();
    $(".section").hide();
    $(".section").eq(index).show();
    });
    $(".box-bg ").counterUp({
      delay:10,
      time:2000
    });
    setTimeout(function(){
      $(".loader_bg").fadeToggle()
    },1500);
    $(".servcie button").click(function(){
      $(".servcie button").removeClass("butactive");
      $(this).addClass("butactive")
    });
});