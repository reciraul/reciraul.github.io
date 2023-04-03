var activePage = "home";

var homePage = document.getElementById(activePage);
homePage.style.display = "block";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  hidePage("home");
}

function showPage(id) {
  hideAllPages();
  show(id);
}
