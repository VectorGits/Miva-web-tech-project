document.getElementById('menu-icon').addEventListener('click', function() {
	var navLinks = document.getElementById('nav-links');
	if (navLinks.style.display === 'flex' || navLinks.style.display === 'grid') {
		navLinks.style.display = 'none';
	} else {
		navLinks.style.display = 'flex';
	}
});

// SLIDER
let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Ensure the initial slide is visible
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});


// Accordion

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  element.classList.toggle('active');
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
  } else {
      content.style.maxHeight = content.scrollHeight + 'px';
  }
}