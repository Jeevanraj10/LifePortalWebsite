function Sidebar() {
    var x = document.getElementById("sidebar");
    var y = document.getElementById("container-1")
    if (x.style.display == 'none' || x.style.display == '') {
        x.style.display = "block";
        y.style.marginLeft = "20%";
    } else {
        x.style.display = "none";
        y.style.marginLeft = "0";
    }
}

function dropDown() {
    var x = document.getElementById("dropdownmenu");
    if (x.style.display == 'none' || x.style.display == '') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function createNewActionPlan() {
    document.getElementById("Dragitem").style.display = "block";
}

function closeForm() {
    document.getElementById("Dragitem").style.display = "none";
}
// tabs functionality
function toggleVisibility(evt, divID, whtIcn, gryIcn) {
    var i
    var x
    var tablinks;

    x = document.getElementsByClassName("tabContentDivision");
    tablinks = document.getElementsByClassName("tablink");
    greyIcon = document.getElementsByClassName("dashboard-icon");
    whiteIcon = document.getElementsByClassName("dashboard-icon1");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        tablinks[i].className = tablinks[i].className.replace("tabsBackground", "");
        greyIcon[i].style.display = "inline-block"
        whiteIcon[i].style.display = "none"
    }
    document.getElementById(divID).style.display = "block";
    evt.currentTarget.className += " tabsBackground";
    document.getElementById(whtIcn).style.display = "inline-block";
    document.getElementById(gryIcn).style.display = "none";
}
// draggable content
var container = document.querySelector("#main");
var dragItem = document.querySelector("#Dragitem");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);
container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(e) {
    if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}