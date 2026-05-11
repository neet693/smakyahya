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

async function updateVisitorCounter() {
  try {
    const response = await fetch(
      "https://api.counterapi.dev/v1/sekolahyahya/visitors/up",
    );

    const data = await response.json();

    document.getElementById("visitor-count").innerText =
      data.count.toLocaleString("id-ID");
  } catch (error) {
    console.error("Counter Error:", error);
  }
}

updateVisitorCounter();
