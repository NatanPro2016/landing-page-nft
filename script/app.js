const accordions = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
const toogler = document.getElementById("toggler");
// const left = document.getElementById("left");
// const right = document.getElementById("right");
const nfts = document.getElementById("nfts");

// left.addEventListener("click", () => {
//   nfts.scrollBy(-window.innerWidth, 0);
// });

// right.addEventListener("click", () => {
//   nfts.scrollBy(window.innerWidth, 0);
// });

accordions.forEach((accordion, index) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    panel[index].classList.toggle("active");
  });
});
let dark = window.matchMedia("(prefers-color-scheme : dark)").matches;

if (dark) {
  document.body.setAttribute("data-theme", "dark");
  toogler.classList.remove("dark");
}
toogler.addEventListener("click", () => {
  if (dark) {
    document.body.removeAttribute("data-theme", "dark");
    dark = false;
    toogler.classList.add("dark");
  } else {
    document.body.setAttribute("data-theme", "dark");
    dark = true;
    toogler.classList.remove("dark");
  }
});

//creating the scroll animation

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entrys) => {
    entrys.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.6,
  }
);
cards.forEach((card) => {
  observer.observe(card);
});

//creating the count up effect
const numbers = document.querySelectorAll(".number");

const numberObserver = new IntersectionObserver((enterys) => {
  enterys.forEach(
    (entery) => {
      let number = entery.target.querySelector("span"); // entery.target.innerHTML
      number = number?.innerText;
      let count = 0;
      console.log(count);
      const increment = setInterval(() => {
        if (count >= number) {
          clearInterval(increment);
        }
        if (entery.target.querySelector("h1")) {
          entery.target.querySelector("span").innerText = count;
        }

        count++;
      }, 1);
      numberObserver.unobserve(entery.target);
    },
    {
      threshold: 1,
    }
  );
});
numbers.forEach((number) => {
  numberObserver.observe(number);
});

// navgation button

const navButton = document.getElementById("side-nav-button");
const container = document.getElementById("container");
const close = document.getElementById("close");

navButton.addEventListener("click", () => {
  container.classList.add("active");
});
close.addEventListener("click", () => {
  container.classList.remove("active");
});
