let toggled = false;

let body = document.getElementsByTagName("body")[0];
let circle = document.getElementById("toggle");
let h1 = document.getElementsByTagName("h1")[0];
let container = document.getElementById("container");
let box = document.getElementById("container");

container.onclick = function(){
    
    if(!toggled){

        h1.classList.add("white");
        body.classList.add("black-bg");
        circle.classList.add("darkMode");
        box.classList.add("white-bg");

        toggled = true;

    }else {
        h1.classList.remove("white");
        body.classList.remove("black-bg");
        circle.classList.remove("darkMode");
        container.classList.remove("white-bg");

        toggled = false;
    }

}