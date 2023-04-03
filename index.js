var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function showSkills() {
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function showHome() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function showProjects() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("languages").style.display = "none";
  document.getElementById("home").style.display = "none";
}

function showLanguages() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
  document.getElementById("home").style.display = "none";
}
