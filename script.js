const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const form = document.querySelector(".order-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submit = form.querySelector("button");
  const previous = submit.textContent;
  submit.textContent = "Заявка принята";
  submit.disabled = true;

  setTimeout(() => {
    submit.textContent = previous;
    submit.disabled = false;
    form.reset();
  }, 1800);
});
