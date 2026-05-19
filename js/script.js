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

// Galery Script
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".gallery-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// End of Galery Script
