// ✅ FORM VALIDATION SCRIPT

document.addEventListener("DOMContentLoaded", function () {
  
  // Validate + Submit Contact Form (mock)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      } 
      if (!validateEmail(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      const contactAlert = document.getElementById("contact-alert");
      if (contactAlert) {
        contactAlert.classList.remove("d-none");
      }
      contactForm.reset();
    });
  }

  // Validate + Submit Reservation Form (mock)
  const reservationForm = document.getElementById("reservation-form");
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("res-name").value.trim();
      const email = document.getElementById("res-email").value.trim();
      const phone = document.getElementById("res-phone").value.trim();
      const date = document.getElementById("res-date").value;
      const time = document.getElementById("res-time").value;
      const guests = document.getElementById("res-guests").value;

      if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
        alert("⚠️ Please complete all reservation fields.");
        return;
      }
      if (!validateEmail(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }
      if (Number(guests) <= 0) {
        alert("⚠️ Number of guests must be at least 1.");
        return;
      }

      const reservationAlert = document.getElementById("reservation-alert");
      if (reservationAlert) {
        reservationAlert.classList.remove("d-none");
      }
      reservationForm.reset();
    });
  }

  // Helper Function for Email Validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

});
