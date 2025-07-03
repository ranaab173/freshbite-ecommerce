document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for Hero Carousel
    const heroSwiper = new Swiper('.main-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
        }
    });

    // Quantity selector functionality
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const decrease = selector.querySelector('.decrease');
        const increase = selector.querySelector('.increase');
        const input = selector.querySelector('input');
        
        decrease.addEventListener('click', function(e) {
            e.preventDefault();
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
        
        increase.addEventListener('click', function(e) {
            e.preventDefault();
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });

    // No custom JS needed for Offcanvas as Bootstrap handles it
    // The previous mobile navigation toggle and dismissal logic has been removed.

    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader-wrapper');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });
});
