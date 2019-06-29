$target  = $(".slider").first(),
currentPosition = parseInt($target.css("transform").split(",")[4]),
moveBy = function(scrolledBy){
    currentPosition += scrolledBy;
    $target.css("transform", "translateX(" + (currentPosition) + "px)")
},
lastScrollTop = 0 ;

currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
$(window).bind("scroll",function(e){
var scrolledBy = $(window).scrollTop() - lastScrollTop;
moveBy(-scrolledBy);
lastScrollTop = $(window).scrollTop();
});

$(function() {
    var header = $(".hello");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('hello').addClass("hello_alt");
        } else {
            header.removeClass("hello_alt").addClass('hello');
        }
    });
});