// Hide page loading animation
const loader = document.getElementById("loader");
window.addEventListener("DOMContentLoaded", () => loader.classList.add("hide"));

// Accordion functionality
document.querySelectorAll(".accordion").forEach((accordion, index) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    document.querySelectorAll(".panel")[index].classList.toggle("active");
  });
});

// Dark mode auto-select and toggle button
const darkModeToggler = document.getElementById("toggler");
let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const updateDarkMode = () => {
  if (isDarkMode) {
    document.body.setAttribute("data-theme", "dark");
    darkModeToggler.classList.remove("dark");
  } else {
    document.body.removeAttribute("data-theme");
    darkModeToggler.classList.add("dark");
  }
};

darkModeToggler.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  updateDarkMode();
});

updateDarkMode(); // Initialize dark mode based on the system's preference

// Scroll reveal animation
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);
cards.forEach((card) => observer.observe(card));

// Count up effect
document.querySelectorAll(".number").forEach((number) => {
  const numberObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetNumber = parseInt(
            entry.target.querySelector("span").innerText,
            10
          );
          let count = 0;
          const increment = setInterval(() => {
            if (count >= targetNumber) {
              clearInterval(increment);
            }
            entry.target.querySelector("span").innerText = count;
            count++;
          }, 1);
          numberObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  numberObserver.observe(number);
});

// Navigation button
const navButton = document.getElementById("side-nav-button");
const container = document.getElementById("container");
const close = document.getElementById("close");
const header = document.querySelector("header");
let isSideNavOpen = false;

// Unified function to toggle the side nav
const toggleSideNav = (isOpen) => {
  container.classList.toggle("active", isOpen);
  header.classList.toggle("active", isOpen);
  isSideNavOpen = isOpen;
};

navButton.addEventListener("click", () => toggleSideNav(true));
close.addEventListener("click", () => toggleSideNav(false));
document.getElementById("container").addEventListener("click", () => {
  if (isSideNavOpen) toggleSideNav(false);
});

// Close side nav on link click
document.querySelectorAll(".sidenav ul li a").forEach((link) => {
  link.addEventListener("click", () => toggleSideNav(false));
});
