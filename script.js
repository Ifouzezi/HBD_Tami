document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  content.classList.add('fade-in');

  // Initialize the video carousel
  const videoElement = document.getElementById('backgroundVideo');
  const videoPaths = [
    'assets/VID-20240628-WA0004.mp4',
    'assets/VID-20240702-WA0012.mp4',
    'assets/VID-20240707-WA0007.mp4',
    'assets/VID-20240701-WA0007.mp4'
  ];
  let currentVideoIndex = 0;

  // Set playback speed for slow effect
  videoElement.playbackRate = 0.01; 

  function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoPaths.length;
    videoElement.src = videoPaths[currentVideoIndex];
    videoElement.play();
  }

  // Change to next video when the current video ends
  videoElement.addEventListener('ended', changeVideo);

  // Initial load
  videoElement.src = videoPaths[currentVideoIndex];
  videoElement.play();

  const lines = document.querySelectorAll('.celeb__content span');
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add the visible class to the line
      } else {
        // Only remove the class if the user scrolls up or down
        if (window.scrollY > lastScrollY) {
          entry.target.classList.remove('visible'); // Remove class on downward scroll
        } else {
          entry.target.classList.remove('visible'); // Remove class on upward scroll
        }
      }
    });
  }, {
    threshold: 0.5 // Adjust threshold for when to trigger the observer
  });

  lines.forEach(line => {
    observer.observe(line); // Start observing each line individually
  });

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY; // Update last scroll position
  });
});
