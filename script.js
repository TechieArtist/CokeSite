const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('mouseenter', () => {
    sidebar.classList.add('sidebar-open');
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('sidebar-open');
});

// JavaScript code to play videos in the slider
const videos = document.querySelectorAll('.slider video');

// Play all videos in the slider
function playVideos() {
  videos.forEach((video) => {
    video.play().catch((error) => {
      // Handle any error that might occur during video play
      console.error('Error playing video:', error);
    });
  });
}

// Wait for the page to load, then play the videos
window.addEventListener('load', playVideos);


const video = document.getElementById('videoElement');

// Play the video when the browser is opened rectangletest
window.addEventListener('load', () => {
    video.play();
});


const spheres = document.querySelectorAll('.sphere');

spheres.forEach(sphere => {
  let animationId;

  sphere.addEventListener('mouseover', () => {
    sphere.style.animationPlayState = 'paused';
    cancelAnimationFrame(animationId);
  });

  sphere.addEventListener('mouseout', () => {
    sphere.style.animationPlayState = 'running';
    animateSphere(sphere);
  });

  animateSphere(sphere);
});

function animateSphere(sphere) {
  let start;
  const duration = 3000; // Duration of the inertia effect in milliseconds

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      const ease = 1 - Math.pow(1 - progress, 5); // Inertia easing function
      const leftValue = parseFloat(sphere.style.left) || 0;
      const newPosition = leftValue + 3 * ease; // Adjust the speed here (3 is just an example)
      sphere.style.left = newPosition + 'px';
      animationId = requestAnimationFrame(step);
    }
  }

  animationId = requestAnimationFrame(step);
}
