$(document).ready(function(){
    $(".banner-btn").click(function () { 
        $(".banner").fadeOut(3000);
    });
    function show(){
        var item = document.getElementById("icon");
        if(item.className=="header-menu"){
            item.classList.add("show")
        }else{
            item.className="header-menu";
        }
    }
})

function show(){
    var banner= document.getElementById("banner");
    var item = document.getElementById("icon");
    if(item.className=="header-menu"){
        item.classList.add("show");
        banner.classList.add("show1")
    }else{
        item.className="header-menu";
        banner.classList.remove("show1")
    }
}
// alert("hello");
$(document).ready(function(){
    $(".banner-btn").click(function () { 
        $(".banner").fadeOut(3000);
    });
})
