const robotImage = document.getElementById('robot');
const defaultImage = 'assets/chilling.jpg';

function changeImage(newSrc) {
  robotImage.src = newSrc;
}

function resetImage() {
  robotImage.src = defaultImage;
}