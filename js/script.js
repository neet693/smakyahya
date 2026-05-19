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

// =========================================
// FACILITY PAGE INTERACTION
// SMA YAHYA
// =========================================

// SMOOTH REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".facility-card, .facility-highlight-content, .facility-highlight-image",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => {
  el.classList.add("hidden-reveal");

  revealObserver.observe(el);
});

// =========================================
// PARALLAX HERO EFFECT
// =========================================

const facilityHero = document.querySelector(".facility-hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (facilityHero) {
    facilityHero.style.backgroundPositionY = `${scrollY * 0.25}px`;
  }
});

// =========================================
// FACILITY CARD HOVER TILT
// =========================================

const facilityCards = document.querySelectorAll(".facility-card");

facilityCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// =========================================
// DYNAMIC ACTIVE NAV
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  if (window.location.pathname.includes("facility")) {
    if (link.getAttribute("href").includes("facility")) {
      link.style.color = "var(--gold)";
    }
  }
});

// =========================================
// OPTIONAL COUNTER ANIMATION
// =========================================

const counters = document.querySelectorAll(".facility-stat h3");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = counter.innerText;

        const numericValue = parseInt(target);

        let current = 0;

        const increment = numericValue / 40;

        const updateCounter = () => {
          current += increment;

          if (current < numericValue) {
            counter.innerText = Math.floor(current) + "+";

            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();

        counterObserver.unobserve(counter);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// =========================================
// REDUCED MOTION SUPPORT
// =========================================

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

if (prefersReducedMotion.matches) {
  document.documentElement.style.scrollBehavior = "auto";
}

// =========================================
// REVEAL CLASS STYLE INJECTION
// =========================================

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.hidden-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.hidden-reveal.show {
  opacity: 1;
  transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);

// =========================================
// PROGRAM PAGE INTERACTION
// =========================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// =========================================
// CARD HOVER MICRO INTERACTION
// =========================================

const cards = document.querySelectorAll(".program-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
  ".program-card, .journey-item, .facility-point",
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================================
// HERO PARALLAX
// =========================================

const hero = document.querySelector(".program-hero");

window.addEventListener("scroll", () => {
  const offset = window.scrollY;

  hero.style.backgroundPositionY = `${offset * 0.4}px`;
});

// =========================================
// NUMBER COUNTER ANIMATION
// =========================================

const counters = document.querySelectorAll(".program-stat h3");

const animateCounter = (counter) => {
  const targetText = counter.innerText;

  const numericValue = parseInt(targetText);

  if (isNaN(numericValue)) return;

  let current = 0;

  const increment = numericValue / 40;

  const updateCounter = () => {
    current += increment;

    if (current < numericValue) {
      counter.innerText = Math.ceil(current) + "+";

      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = targetText;
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target.querySelector("h3"));

        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  },
);

document.querySelectorAll(".program-stat").forEach((stat) => {
  counterObserver.observe(stat);
});

// =========================================
// MOBILE NAV TOGGLE (OPTIONAL)
// =========================================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
