// Dynamic Year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Form Handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lead-form");
  const successBox = document.getElementById("success");
  const successEmail = document.getElementById("success-email");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (!form || !successBox || !successEmail || !submitBtn || !resetBtn) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    setTimeout(() => {
      successBox.hidden = false;
      successEmail.textContent = form.email.value.trim();
      form.style.display = "none";
      resetBtn.hidden = false;
      const h2 = successBox.querySelector("h2");
      if (h2) h2.focus();
    }, 1200);
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    form.style.display = "";
    submitBtn.disabled = false;
    submitBtn.textContent = "Get the Guide";

    successBox.hidden = true;
    resetBtn.hidden = true;
    form.name.focus();
  });
});
