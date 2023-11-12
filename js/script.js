// WEBSTORAGE_API
let form = document.getElementById('myForm')
let login = document.getElementById('name')
let password = document.getElementById('email')
if (localStorage.length != 0) {
    login.value = localStorage.login
    password.value = localStorage.password
}
    
form.addEventListener('submit', () => {
    localStorage.login = login.value
    localStorage.password = password.value
})
//WEBSTORAGE_API

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

//MODIFICATION_PAGE
var isTextShown = false;
function showText() {
    if (!isTextShown) {
        var newTextElement = document.createElement("p");
        var textNode = document.createTextNode("Kolumna e-mail musi zawierać symbol @");
        newTextElement.appendChild(textNode);
        newTextElement.style.marginTop = "10px";
        var formElement = document.getElementById("myForm");
        formElement.appendChild(newTextElement);
        isTextShown = true;
    }
}
//MODIFICATION_PAGE 