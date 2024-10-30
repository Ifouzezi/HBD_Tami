document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  content.classList.add('fade-in');

  // Confetti effect
  function launchConfetti() {
      const duration = 5 * 1000; // Duration in milliseconds
      const end = Date.now() + duration;

      (function frame() {
          confetti({
              particleCount: 7,
              angle: 90,
              spread: 45,
              startVelocity: 30,
              decay: 0.9,
              scalar: 1.2,
              ticks: 60,
              zIndex: 4,
          });

          if (Date.now() < end) {
              requestAnimationFrame(frame);
          }
      })();
  }

  // Launch confetti when the page loads
  launchConfetti();
  // Initialize the video carousel
  const videoElement = document.getElementById('backgroundVideo');
  const videoPaths = [
    'assets/VID-20240628-WA0004.mp4',
    'assets/VID-20240702-WA0012.mp4',
    'assets/VID-20240707-WA0007.mp4',
    'assets/VID-20240701-WA0007.mp4',
    'assets/VID-20240804-WA0015.mp4',
    'assets/VID-20240707-WA0011.mp4'
  ];
  let currentVideoIndex = 0;

  // Set playback speed for slow effect
  videoElement.playbackRate = 0.0625; // Slowest supported speed in Chrome

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

  const texts = [
  "Baddie",
  "COO",
  "Career Lady",
  "Legend",
  "Fried Yam Eater",
  "Money Maker",
  "LOML",
  "Mine"
];

let currentIndex = 0;
const textDisplay = document.getElementById("textDisplay");

function displayText() {
    textDisplay.style.opacity = 0; // Fade out

    setTimeout(() => {
        textDisplay.textContent = texts[currentIndex]; // Change text
        textDisplay.style.opacity = 1; // Fade in

        currentIndex = (currentIndex + 1) % texts.length; // Cycle through texts
    }, 500); // Duration of fade out

}

// Start displaying text at intervals
displayText();
setInterval(displayText, 3000); // Change text every 3 seconds

});
