document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const slideCount = carousel.childElementCount;
    let slideIndex = 0;
  
    function showSlide(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slideCount;
      showSlide(slideIndex);
    }
  
    function prevSlide() {
      slideIndex = (slideIndex - 1 + slideCount) % slideCount;
      showSlide(slideIndex);
    }
  
    prevButton.addEventListener('click', () => {
      prevSlide();
    });
  
    nextButton.addEventListener('click', () => {
      nextSlide();
    });
  
    // Fonction pour déclencher l'animation automatique
    function startAutoSlide() {
      setInterval(() => {
        nextSlide();
      }, 500000); // Change d'image toutes les 3 secondes (ajustez cette valeur selon vos préférences)
    }
  
    startAutoSlide(); // Démarre l'animation automatique dès le chargement de la page
  });
  