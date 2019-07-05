function Sidebar() {
  document.getElementById("sidebar").style.display = "block";
}
function dropDown() {
  document.getElementById("dropdownmenu").style.display = "block";
}
function Close(){
  document.getElementById("dropdownmenu").style.display = "none";
  document.getElementById("sidebar").style.display = "none";
}
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
