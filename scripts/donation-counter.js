document.addEventListener("DOMContentLoaded", function () {
  // Simulated donation data - in a real app, this would come from your backend
  const donationData = {
    goal: 20000,
    raised: 13000,
    donors: 400,
  };

  // Calculate percentage
  const percentage = Math.min(
    Math.round((donationData.raised / donationData.goal) * 100),
    100
  );

  // Update progress bar
  const progressFill = document.getElementById("progress-fill");
  progressFill.style.width = `${percentage}%`;

  // Animate counter for amount raised
  const amountRaised = document.getElementById("amount-raised");
  animateValue(amountRaised, 0, donationData.raised, 2000, "R$ ");

  // Animate counter for donors
  const donorsCount = document.getElementById("donors-count");
  animateValue(
    donorsCount,
    0,
    donationData.donors,
    2000,
    "",
    " pessoas já contribuíram"
  );

  // Generic counter animation function
  function animateValue(
    element,
    start,
    end,
    duration,
    prefix = "",
    suffix = ""
  ) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      // Format number with commas (or periods in some locales)
      const formattedValue = value.toLocaleString("pt-BR");

      element.textContent = prefix + formattedValue + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
});
