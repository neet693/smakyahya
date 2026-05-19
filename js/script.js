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

// =========================================
// GALLERY FILTER
// =========================================

const filterButtons = document.querySelectorAll(".gallery-filter-btn");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // REMOVE ACTIVE
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // ADD ACTIVE
    button.classList.add("active");

    // GET FILTER
    const filter = button.dataset.filter;

    // FILTER CARDS
    galleryCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";

        requestAnimationFrame(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  });
});

// =========================================
// INITIAL CARD ANIMATION
// =========================================

galleryCards.forEach((card) => {
  card.style.transition = "opacity 0.25s ease, transform 0.25s ease";

  card.style.opacity = "1";
  card.style.transform = "translateY(0)";
});
