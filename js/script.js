function switchSmart(panel, btn) {
  document
    .querySelectorAll(".smart-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  if (panel === "teachers") {
    document.getElementById("panelTeachers").style.display = "grid";
    document.getElementById("panelStudents").style.display = "none";
  } else {
    document.getElementById("panelTeachers").style.display = "none";
    document.getElementById("panelStudents").style.display = "grid";
  }
}
