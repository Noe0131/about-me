const swiperPikumin = new Swiper('.swiper-container', {
    effect: 'slide', // スライドエフェクト
    speed: 1000, // アニメーション速度
    slidesPerView: 1, // 一度に表示するスライド数
    spaceBetween: 70, // スライド間のスペース

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
