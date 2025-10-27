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

  // Grab the whole section that contains the form + heading
  const formSection = form.closest("section");

  // Safety check in case elements aren't found
  if (!form || !successBox || !successEmail || !submitBtn || !resetBtn) return;

  // Handle submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Built-in HTML validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Simulate sending...
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // After short delay, show success box and hide form section
    setTimeout(() => {
      successBox.hidden = false;
      successEmail.textContent = form.email.value.trim();

      if (formSection) formSection.hidden = true; // hide heading + form
      resetBtn.hidden = false;

      // Move focus to the success heading for accessibility
      const h2 = successBox.querySelector("h2");
      if (h2) h2.focus();
    }, 1200);
  });

  // Handle reset button
  resetBtn.addEventListener("click", () => {
    form.reset();
    if (formSection) formSection.hidden = false; // show heading + form again

    submitBtn.disabled = false;
    submitBtn.textContent = "Get the Guide";

    successBox.hidden = true;
    resetBtn.hidden = true;
    form.name.focus();
  });
});
