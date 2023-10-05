// create a nav tracker for intersection observer
const nav = document.getElementById("nav");
const navTracker = document.createElement("div");
navTracker.id = "nav-tracker";
nav.parentNode.insertBefore(navTracker, nav);

// add observe to nav tacker
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? nav.classList.remove("active") : nav.classList.add("active");
  });
});
observer.observe(navTracker);

// parallax effect for hero heading
const heroHeading = document.getElementById("hero-heading");
window.addEventListener("scroll", () => {
  heroHeading.style.transform = `translateY(${window.scrollY / 4}px)`;
});

// add event listeners for tab toggle
const toggleButtons = document.querySelectorAll(".schedule-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    toggleButtons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");
    const sectionId = e.target.dataset.toggle;

    document.querySelectorAll(".schedule-container").forEach((container) => {
      container.style.display = container.id === sectionId ? "block" : "none";
    });
  });
});
