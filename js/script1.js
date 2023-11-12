//CHANGECOLOR
var isred = false;
function changeColor() {
    var textElements = document.getElementsByClassName("start");
    for (var i = 0; i < textElements.length; i++) {
        if (isred){textElements[i].style.color = "black";}
        else{textElements[i].style.color = "red";}
    }
    isred = !isred;   
}
//CHANGECOLOR

//JQUERY_1
$(document).ready(function() {
    $('section p.start, img.start').hide().each(function(index) {
        $(this).delay(500 * index).fadeIn(1000);
    });
});
//JQUERY_1
