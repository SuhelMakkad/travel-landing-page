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
