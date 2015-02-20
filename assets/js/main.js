var menuBars = document.getElementById("menu-bars");
var shade = document.getElementById("shade");
var clickMe = document.getElementById("clickMe");
var drawer = document.getElementById("menu-drawer");
var isMenuClosed = false;

function openHomeMenu() {
    
    if(!(clickMe.classList.contains("invisible")))
        clickMe.classList.add("invisible");
    
    if(isMenuClosed) {
        shade.classList.add("invisible");
        drawer.classList.add("invisible");
        isMenuClosed = false;
        return;
    }

    if(!isMenuClosed) {
        shade.classList.remove("invisible");
        drawer.classList.remove("invisible");
        isMenuClosed = true;
        return;
    }
    
}

function openMenu() {
    
    if(isMenuClosed) {
        shade.classList.add("invisible");
        drawer.classList.add("invisible");
        isMenuClosed = false;
        return;
    }

    if(!isMenuClosed) {
        shade.classList.remove("invisible");
        drawer.classList.remove("invisible");
        isMenuClosed = true;
        return;
    }
    
}