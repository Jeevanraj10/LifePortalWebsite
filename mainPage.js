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

// tabs container functionality.
var divs = ["myTrainingDivision", "requestedTrainingDivision", "trainingCatalogDivision",
"myLearningPlansDivision","atlDivision","idpDivision",
"myCompletionsDivision","myOnlineTestsDivision","moocCoursesDivision"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if (visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i
  var divId
  var div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
function dialogueBox() {
  document.getElementById('myDialog').showModal();
}
