let menu = document.getElementById('menuItem');

let menuBtn = document.querySelector(".menus");
let closeBtn = document.querySelector(".close");

function menuOpen() {
    menu.style.display = "block";
    menuBtn.style.display = 'none';
    closeBtn.style.display = "block"
}


function menuClose() {
    menu.style.display = "none";
    menuBtn.style.display = 'block';
    closeBtn.style.display = "none"
}