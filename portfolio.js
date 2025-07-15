
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#000000";
  } else {
    navbar.style.backgroundColor = "#1f1f1f";
  }
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerBottom = window.innerHeight * 0.9;

  if (sectionTop < triggerBottom) {
    skillsSection.classList.add("animate-skills");
  }
});

