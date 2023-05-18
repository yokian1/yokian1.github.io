
 /////parte para que deje de darle al next al llegar al final de los carrousel


  const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Botones
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Contador
let counter = 0;

// Tamaño de las imagenes
const size = carouselImages[0].clientWidth;

// Moviendo a la primera imagen
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Boton "Next"
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return; // Verificar si es el último elemento
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// Boton "Prev"
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return; // Verificar si es el primer elemento
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// Resetear al principio al llegar al último elemento
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  // Habilitar/deshabilitar botones
  if (counter >= carouselImages.length - 1) {
    nextBtn.disabled = true;
  } else if (counter <= 0) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var toggles = document.getElementsByClassName('collapsible-toggle');
  
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function() {
      var collapsible = this.parentNode.parentNode;
      collapsible.classList.toggle('active');
    });
  }
});


