var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function hidePage(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  document.getElementById(id).style.display = "block";
}

function showHome() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  showPage("home");
}

function showSkills() {
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
  showPage("skills");
}

function showProjects() {
  hidePage("skills");
  hidePage("languages");
  hidePage("home");
  showPage("projects");
}

function showLanguages() {
  hidePage("skills");
  hidePage("projects");
  hidePage("home");
  showPage("languages");
}
