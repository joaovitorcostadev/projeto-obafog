document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".nav");

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        nav.classList.remove("active");
      }
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });

    testimonials[index].classList.add("active");
  }

  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Donation Options Selection
  const donationOptions = document.querySelectorAll(".donation-option");
  const customAmountInput = document.getElementById("amount");

  donationOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove active class from all options
      donationOptions.forEach((opt) => opt.classList.remove("active"));

      // Add active class to clicked option
      this.classList.add("active");

      // Set custom amount input to selected value
      const value = this.textContent.replace("R$ ", "");
      customAmountInput.value = value;
    });
  });

  // Form submission (simulated)
  const donationForm = document.querySelector(".donation-card");
  donationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Obrigado pela sua doação! Você será redirecionado para a página de pagamento."
    );
    // In a real implementation, this would redirect to payment processing
  });
});
