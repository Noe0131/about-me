// 世界遺産のスライド
// Swiperスライダーの初期化
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // スライダーの方向を垂直に設定
    effect: 'fade', // フェード効果を設定
    speed: 1000, // スライド切り替えの速度を設定 (1000ミリ秒)
    loop: true, // スライドをループさせる
    pagination: {
        el: '.swiper-pagination', // ページネーション要素のクラス名
        clickable: true, // クリック可能に設定
    },
    mousewheel: {
        invert: false, // マウスホイールの方向を反転しない
        forceToAxis: false, // マウスホイールを強制的に軸に合わせない
        thresholdDelta: 30, // スクロールを認識するしきい値の設定
        sensitivity: 1, // スクロールの感度を設定
    },
    on: {
        slideChange: function () { // スライドが変更されたときの処理
            this.slides.forEach((slide) => { // すべてのスライドをループ処理
                let background = slide.querySelector('.background'); // 各スライド内の背景要素を取得
                if (background) {
                    background.classList.remove('animation'); // 背景要素が存在する場合、アニメーションクラスを削除
                }
            });
            let activeSlide = this.slides[this.activeIndex]; // 現在アクティブなスライドを取得
            let background = activeSlide.querySelector('.background'); // アクティブスライド内の背景要素を取得
            if (background) {
                background.classList.add('animation'); // 背景要素が存在する場合、アニメーションクラスを追加
            }
        },
    },
});
