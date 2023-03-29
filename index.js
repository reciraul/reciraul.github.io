var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function showSkills() {
  console.warn("skills");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

function showProjects() {
  console.warn("projects");
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

function showLanguages() {
  console.warn("languages");
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}
