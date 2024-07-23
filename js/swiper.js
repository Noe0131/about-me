    // Swiperスライダーの初期化
    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        effect: 'fade',
        speed: 1000,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: {
            invert: false,
            forceToAxis: false,
            thresholdDelta: 30,
            sensitivity: 1,
        },
        on: {
            slideChange: function () {
                this.slides.forEach((slide) => {
                    let background = slide.querySelector('.background');
                    if (background) {
                        background.classList.remove('animation');
                    }
                });
                let activeSlide = this.slides[this.activeIndex];
                let background = activeSlide.querySelector('.background');
                if (background) {
                    background.classList.add('animation');
                }
            },
        },
    });