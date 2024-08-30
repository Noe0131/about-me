// DOMContentLoadedイベントが発生したときに実行する関数を登録
document.addEventListener('DOMContentLoaded', function() {
    // 新しいSwiperインスタンスを作成し、初期化する
    var swiper = new Swiper('.swiper-container', { // Swiperコンテナのクラス名を指定
        slidesPerView: 1, // 一度に表示するスライドの数を1に設定
        spaceBetween: 10, // スライド間のスペースを10pxに設定
        pagination: {
            el: '.swiper-pagination', // ページネーション要素のクラス名を指定
            clickable: true, // ページネーションがクリック可能になるように設定
            // ページネーションのカスタマイズオプションを追加
        },
        navigation: {
            nextEl: '.swiper-button-next', // 次のボタン要素のクラス名を指定
            prevEl: '.swiper-button-prev', // 前のボタン要素のクラス名を指定
            // ナビゲーションボタンのカスタマイズオプションを追加
        },
        loop: true, // スライダーをループさせる設定
        // オートプレイの設定を追加
        autoplay: {
            delay: 3000, // スライドが自動的に次に切り替わるまでの時間（ミリ秒）
            disableOnInteraction: false, // ユーザーがスライダーと対話した後もオートプレイを維持
        },
        // スライダーのアニメーション設定を追加
        speed: 600, // スライドの切り替わりの速さ（ミリ秒）
        effect: 'fade', // スライダーのエフェクトを指定（例： 'slide', 'fade', 'cube', 'coverflow', 'flip'）
    });
});


