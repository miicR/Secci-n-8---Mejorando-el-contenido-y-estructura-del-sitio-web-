const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];
let currentImageIndex = 0;

const toggleButton = document.querySelector('#toggle-btn');
const sliderContainer = document.querySelector('#slider-container');
const galleryContainer = document.querySelector('#gallery-container');
const prevButton = document.querySelector('#prev-btn');
const nextButton = document.querySelector('#next-btn');

function showImage(index) {
  sliderContainer.innerHTML = `<img class="img" src="${images[index]}" alt="Imagen ${index + 1}">`;
}

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

toggleButton.addEventListener('click', () => {
  if (sliderContainer.style.display === "none") {
    toggleButton.textContent = "Ver vista galería de imágenes";
    sliderContainer.style.display = "flex";
    galleryContainer.style.display = "none";
  } else {
    toggleButton.textContent = "Ver vista deslizador de imágenes";
    sliderContainer.style.display = "none";
    galleryContainer.style.display = "flex";
  }
});

showImage
