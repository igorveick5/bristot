
// Header visibility
let lastScrollTop = 0;

// Function to hide or show the header based on scroll direction
window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector('.header').classList.add('hidden');
  } else {
    // Scrolling up
    document.querySelector('.header').classList.remove('hidden');
  }

  // Update the last scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
