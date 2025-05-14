const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.fa-chevron-right',
        prevEl: '.fa-chevron-left',
    },
    on: {
        slideChange: function () {
            const total = this.slides.length - 2; // Total slides excluding looped ones
            const current = ((this.realIndex + 1) % total || total); // Current slide index, adjusted for loops
            document.getElementById('slideCounter').textContent = `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
        }
    }
});

// swiper 

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
swiperEl.initialize();


