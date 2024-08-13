const swiper = new Swiper('.swiper', {
    effect: 'cube', // 'slide' エフェクトを指定する際は文字列で指定
    speed: 1000, // アニメーションの速度（ミリ秒）
    slidesPerView: 1, // 一度に表示するスライド数
    spaceBetween: 10, // スライド間のスペース
    loop: true, // スライドのループ設定
    navigation: {
        nextEl: '.swiper-button-next', // 次のスライドに進むボタン
        prevEl: '.swiper-button-prev', // 前のスライドに戻るボタン
    },
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーの要素
        draggable: true, // スクロールバーをドラッグ可能にする
    },
});

