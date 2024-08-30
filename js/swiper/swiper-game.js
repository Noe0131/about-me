const swiper = new Swiper('.swiper', {
    effect: 'coverflow', // エフェクトを'coverflow'に変更
    speed: 1000, // アニメーションの速度（ミリ秒）
    slidesPerView: 1, // 一度に表示するスライド数
    spaceBetween: 10, // スライド間のスペース
    loop: true, // スライドのループ設定
    coverflowEffect: { // coverflowエフェクトのオプション
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next', // 次のスライドに進むボタン
        prevEl: '.swiper-button-prev', // 前のスライドに戻るボタン
    },
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーの要素
        draggable: true, // スクロールバーをドラッグ可能にする
    },
});

