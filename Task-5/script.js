// Array of image URLs
const images = [
  "https://www.thespruce.com/thmb/sUSBDtvf3Z-RB7TcwOTBh3GFWqk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/most-colorful-garden-plants-4689533-21-7131c8bc7f3e48f8ade21a142d98f4fa.jpeg",
  "https://forevergarden.in/wp-content/uploads/2024/03/red-rose-2.jpg",
  "https://plus.unsplash.com/premium_vector-1712168936685-a4ae412d31d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7aOJE8CYpaVbWlXJk7lSz28jKYUcRvDXrw&s",
];

let currentIndex = 0;


const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


function updateImage() {
  sliderImage.src = images[currentIndex];
}


prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; 
  updateImage();
});


updateImage();
