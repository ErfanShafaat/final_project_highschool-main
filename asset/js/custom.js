$(document).ready(function () {
   $("#tour").click(function (e) { 
      $(".app").css("display", "none");
      $(".modal").css("display", "flex");
   });
   $(".modal-btn").click(function (e) { 
      $(".app").css("display", "block");
      $(".modal").css("display", "none");
      
   });
$("#dark-mode").click(function () { 
      $("p").css("color", "white");
      $("h1,h2").css("color", "aqua");
      $("li a").css("color", "red");
      $("pre").css("color", "gold");
      $(".banner h1").css("color", "aqua");
      $("body").css("background-color", "black");
      $(".option-box").css("background-color", "royalblue");
      $(".option-box-item").css("background-color", "royalblue");
      $("section").css("background-color", "black");
      $(".servises-icon").css("background-color", "darkblue")
      $(".enjoy-text-icon").css("background-color", "gold");
      $("#servises-box-item1").hover(function () {
           $("#servises-box-item1").css("border-bottom", "1px solid gold");
         }, function () {
            $("#servises-box-item1").css("border-bottom", "none");
         }
      );
      $("#servises-box-item2").hover(function () {
         $("#servises-box-item2").css("border-bottom", "1px solid gold");
       }, function () {
          $("#servises-box-item2").css("border-bottom", "none");
       }
    );
    $("#servises-box-item3").hover(function () {
      $("#servises-box-item3").css("border-bottom", "1px solid gold");
    }, function () {
       $("#servises-box-item3").css("border-bottom", "none");
    }
 );
 $("#servises-box-item4").hover(function () {
   $("#servises-box-item4").css("border-bottom", "1px solid gold");
 }, function () {
    $("#servises-box-item4").css("border-bottom", "none");
 }
);
$(".header-menu-item:nth-child(1)").hover(function () {
   $(".header-menu-item a:nth-child(1)").css("color", "rgb(112, 143, 235)");
 }, function () {
    $(".header-menu-item a:nth-child(1)").css("color", "red");
 }
);
$(".header-menu-item:nth-child(2)").hover(function () {
   $("a").css("color", "rgb(112, 143, 235)");
 }, function () {
    $("a").css("color", "red");
 }
);
$(".header-menu-item:nth-child(3)").hover(function () {
   $("a").css("color", "rgb(112, 143, 235)");
 }, function () {
    $("a").css("color", "red");
 }
);
$(".header-menu-item:nth-child(4)").hover(function () {
   $("a").css("color", "rgb(112, 143, 235)");
 }, function () {
    $("a").css("color", "red");
 }
);
$(".header-menu-item:nth-child(5)").hover(function () {
   $("a").css("color", "rgb(112, 143, 235)");
 }, function () {
    $("a").css("color", "red");
 }
);
$(".header-menu-item:nth-child(6)").hover(function () {
   $("a").css("color", "rgb(112, 143, 235)");
 }, function () {
    $("a").css("color", "red");
 }
);

});
$("#light-mode").click(function (e) { 
   $("p").css("color", "black");
   $("li a").css("color", "black");
   $("h1,h2").css("color", "black");
   $("pre").css("color", "black");
   $(".banner h1,.banner h2").css("color", "white");
   $("body").css("background-color", "#f1f3f1");
   $("section").css("background-color", "#f1f3f1");
   $(".option-box ").css("background-color", "royalblue");
   $(".option-box-item ").css("background-color", "royalblue");
   $(".servises-icon").css("background-color", "darkblue");
   $(".enjoy-text-icon").css("background-color", "rgb(12, 12, 49)");
   $(".intro-img2 h1,.intro-img h1").css("color", "white");
   $(".intro-img2,.intro-img").css("background-color", "#040404");
   $("#servises-box-item1").hover(function () {
        $("#servises-box-item1").css("border-bottom", "1px solid black");
        $("#servises-box-item1").css("box-shadow", "none");
      }, function () {
         $("#servises-box-item1").css("border-bottom", "none");
         $("#servises-box-item1").css("box-shadow", "none");
      }
   )
   $("#servises-box-item2").hover(function () {
      $("#servises-box-item2").css("border-bottom", "1px solid black");
      $("#servises-box-item2").css("box-shadow", "none");
    }, function () {
       $("#servises-box-item2").css("border-bottom", "none");
       $("#servises-box-item2").css("box-shadow", "none");
    }
 )
 $("#servises-box-item3").hover(function () {
   $("#servises-box-item3").css("border-bottom", "1px solid black");
   $("#servises-box-item3").css("box-shadow", "none");
 }, function () {
    $("#servises-box-item3").css("border-bottom", "none");
    $("#servises-box-item3").css("box-shadow", "none");
 }
)
$("#servises-box-item4").hover(function () {
   $("#servises-box-item4").css("border-bottom", "1px solid black");
   $("#servises-box-item4").css("box-shadow", "none");
 }, function () {
    $("#servises-box-item4").css("border-bottom", "none");
    $("#servises-box-item4").css("box-shadow", "none");
 }
)
});
$(".sing-up").click(function () { 
   alert('you cant sing up')
   
});
$(".box1").mouseenter(function () { 
   $(".box1 .intro-img").css("display", "none");
   $(".box1 .intro-img2").css("display", "flex");
});
$(".box1").mouseleave(function () { 
   $(".box1 .intro-img").css("display", "flex");
   $(".box1 .intro-img2").css("display", "none");
});
$(".box2").mouseenter(function () { 
   $(".box2 .intro-img").css("display", "none");
   $(".box2 .intro-img2").css("display", "flex");
});
$(".box2").mouseleave(function () { 
   $(".box2 .intro-img").css("display", "flex");
   $(".box2 .intro-img2").css("display", "none");
});
$(".box3").mouseenter(function () { 
   $(".box3 .intro-img").css("display", "none");
   $(".box3 .intro-img2").css("display", "flex");
});
$(".box3").mouseleave(function () { 
   $(".box3 .intro-img").css("display", "flex");
   $(".box3 .intro-img2").css("display", "none");
});
$(".box4").mouseenter(function () { 
   $(".box4 .intro-img").css("display", "none");
   $(".box4 .intro-img2").css("display", "flex");
});
$(".box4").mouseleave(function () { 
   $(".box4 .intro-img").css("display", "flex");
   $(".box4 .intro-img2").css("display", "none");
});
$(".box5").mouseenter(function () { 
   $(".box5 .intro-img").css("display", "none");
   $(".box5 .intro-img2").css("display", "flex");
});
$(".box5").mouseleave(function () { 
   $(".box5 .intro-img").css("display", "flex");
   $(".box5 .intro-img2").css("display", "none");
});
$(".box6").mouseenter(function () { 
   $(".box6 .intro-img").css("display", "none");
   $(".box6 .intro-img2").css("display", "flex");
});
$(".box6").mouseleave(function () { 
   $(".box6 .intro-img").css("display", "flex");
   $(".box6 .intro-img2").css("display", "none");
});
$(".box7").mouseenter(function () { 
   $(".box7 .intro-img").css("display", "none");
   $(".box7 .intro-img2").css("display", "flex");
});
$(".box7").mouseleave(function () { 
   $(".box7 .intro-img").css("display", "flex");
   $(".box7 .intro-img2").css("display", "none");
});
});