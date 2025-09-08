// ✅ FORM VALIDATION SCRIPT

document.addEventListener("DOMContentLoaded", function () {
  
  // Validate Contact Form
  const contactForm = document.querySelector("form"); 
  if (contactForm && contactForm.querySelector("#message")) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields before submitting.");
        e.preventDefault(); // stop form from submitting
      } else if (!validateEmail(email)) {
        alert("⚠️ Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }

  // Validate Reservation Form
  const reservationForm = document.querySelector("form"); 
  if (reservationForm && reservationForm.querySelector("#res-date")) {
    reservationForm.addEventListener("submit", function (e) {
      const name = document.getElementById("res-name").value.trim();
      const email = document.getElementById("res-email").value.trim();
      const phone = document.getElementById("res-phone").value.trim();
      const date = document.getElementById("res-date").value;
      const time = document.getElementById("res-time").value;
      const guests = document.getElementById("res-guests").value;

      if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
        alert("⚠️ Please complete all reservation fields.");
        e.preventDefault();
      } else if (!validateEmail(email)) {
        alert("⚠️ Please enter a valid email address.");
        e.preventDefault();
      } else if (guests <= 0) {
        alert("⚠️ Number of guests must be at least 1.");
        e.preventDefault();
      }
    });
  }

  // ✅ Helper Function for Email Validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

});
