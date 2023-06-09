var activePage = "skills";

showPage(activePage);

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = document.querySelectorAll("#main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
  var link = document.querySelector(
    `#top-menu-bar a[data-page="${activePage}"]`
  );
  link.classList.remove("active");
}

function showPage(id) {
  hideAllPages();
  show(id);
  var link = document.querySelector(`#top-menu-bar a[data-page="${id}"]`);
  link.classList.add("active");
  activePage = id;
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});

function showSkills(skills) {
  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
  });
  /* skills.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  }); */
  var html = skills.map(function (skill) {
    /* var cls = "";
    if (skill.endorcements > 4) {
      cls = 'class="important"';
    } */
    var cls = skill.endorcements > 4 ? "important" : "";
    if (skill.endorcements > 4)
      return `<li class="${cls}">
        ${skill.name} ${
        skill.endorcements < 2
          ? ""
          : `- <span class="endorcements">${skill.endorcements}</span>`
      }
           </li>`;
  });

  var container = document.querySelector("#skills ul");
  container.innerHTML = html.join("");
}

function loadSkills() {
  fetch("skills.json")
    .then(function (r) {
      return r.json();
      //  .then(function (r2) {
      //   console.warn("r2", r2);
      // });
    })
    .then(function (skills) {
      console.warn("skills", skills);
      showSkills(skills);
    });
}

loadSkills();
// TODO loadLanguages();
