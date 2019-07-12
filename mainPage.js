function Sidebar() {
  var x = document.getElementById("sidebar");
  if (x.style.display == 'none' || x.style.display == '') {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function dropDown() {
  // document.getElementById("dropdownmenu").style.display = "block";
  var x = document.getElementById("dropdownmenu");
  if (x.style.display == 'none' || x.style.display == '') {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Close(){
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("dropdownmenu").style.display = "none";
}
function createNewActionPlan() {
  document.getElementById("mainModal").style.display = "block";
  var form = document.getElementsByClassName('modal-content');
  for(var i = 0; i < form.length; i++) {
    form[i].style.display='block'
}
}
function closeForm() {
  document.getElementById("mainModal").style.display = "none";
}
function toggleVisibility(evt, divID) {
  var i
  var x
  var tablinks;
  x = document.getElementsByClassName("tabContentDivision");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tabsBackground", "");
  }
  document.getElementById(divID).style.display = "block";
  evt.currentTarget.className += " tabsBackground";
}
