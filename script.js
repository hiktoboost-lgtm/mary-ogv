const sections = document.querySelectorAll(".hero, .about, .who, .inside, .bridge, .footer");

const stepDelays = () => {
  document.querySelectorAll(".who__item, .facts li, .inside__row").forEach((el, i) => {
    el.style.setProperty("--d", `${i * 90}ms`);
  });
};
stepDelays();

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach((section) => io.observe(section));

document.querySelector(".nav").classList.add("is-in");
