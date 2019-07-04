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

function myTrainingFunction(){
  document.getElementById('myTrainingDivision').style.display = 'block';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function requestedTrainingFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'block';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function trainingCatalogFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'block';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function myLearningPlansFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'block';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function atlFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'block';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function idpFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'block';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function myCompletionsFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'block';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function onlineTestsFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'block';
  document.getElementById('moocCoursesDivision').style.display = 'none';
}
function moocCoursesFunction() {
  document.getElementById('myTrainingDivision').style.display = 'none';
  document.getElementById('requestedTrainingDivision').style.display = 'none';
  document.getElementById('trainingCatalogDivision').style.display = 'none';
  document.getElementById('myLearningPlansDivision').style.display = 'none';
  document.getElementById('atlDivision').style.display = 'none';
  document.getElementById('idpDivision').style.display = 'none';
  document.getElementById('myCompletionsDivision').style.display = 'none';
  document.getElementById('myOnlineTestsDivision').style.display = 'none';
  document.getElementById('moocCoursesDivision').style.display = 'block';
}
