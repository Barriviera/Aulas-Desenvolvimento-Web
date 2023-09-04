// Carrossel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        index = 0;
    }

    currentIndex = index;

    carouselItems.forEach((item, i) => {
        if (i === currentIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    carouselContainer.style.transform = `translateX(-${currentIndex}%)`;
    
}



prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Mostrar o primeiro slide
showSlide(currentIndex);




// Menu com animação
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
});
