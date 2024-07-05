document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const overlay = document.getElementById("overlay");
  const searchBox = document.getElementById("search-box");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Function to show the next slide
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Show the next slide every 5 seconds
  setInterval(showNextSlide, 5000);

  // Show the search box when the search icon is clicked
  searchIcon.addEventListener("click", function () {
    overlay.style.display = "flex";
  });

  // Hide the search box when clicking outside of it
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
