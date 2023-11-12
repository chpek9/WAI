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

//JQUERY_2
$(document).ready(function() {
    let currentIndex = 0;
    showImage(currentIndex);
    $('#prevBtn').on('click', function() {
        currentIndex = (currentIndex - 1 + $('.gallery img').length) % $('.gallery img').length;
        showImage(currentIndex);
    });

    $('#nextBtn').on('click', function() {
        currentIndex = (currentIndex + 1) % $('.gallery img').length;
        showImage(currentIndex);
    });

    function showImage(index) {
        $('.gallery img').hide();
        $('.gallery img').eq(index).show();
    }
});
//JQUERY_2
