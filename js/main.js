function toggle () {
    var x = document.getElementById("nav-links");
    if(x.className==="normal-nav-links") {
        x.className = "dropdown-nav-links";
    } else {
        x.className = "normal-nav-links";
    }
}