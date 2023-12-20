
function openFullscreen(imageSrc) {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');

    // Set the clicked image source to the fullscreen image
    fullscreenImage.src = imageSrc;

    // Show the fullscreen container
    fullscreenContainer.style.display = 'flex';
  }

  function closeFullscreen() {
    const fullscreenContainer = document.getElementById('fullscreenContainer');

    // Hide the fullscreen container
    fullscreenContainer.style.display = 'none';
  }