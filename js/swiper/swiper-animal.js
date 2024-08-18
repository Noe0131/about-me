
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,  // 一度に表示するスライド数
    effect: 'slide',   // スライドエフェクトを指定
    speed: 1000,       // スライドの速度を設定 (ミリ秒)
});


// スクロールバーのドラッグ機能を制御するためのコード

// 1. スクロールボタンを探して、コードで使えるようにする
const scrollBtn = document.getElementById('scrollBtn');

// 2. ドラッグ中かどうかを示すフラグを作る
// 初めはドラッグしていないので、false にしておく
let isDragging = false;

// 3. スクロールボタンを押したときにドラッグを開始する処理
scrollBtn.addEventListener('mousedown', (e) => {
    // ドラッグ中であると設定する
    isDragging = true;
    // マウスが動いたときの処理を追加する
    document.addEventListener('mousemove', onMouseMove);
});

// 4. マウスボタンを離したときにドラッグを終了する処理
document.addEventListener('mouseup', () => {
    // ドラッグ中でないと設定する
    isDragging = false;
    // マウスが動いたときの処理を削除する
    document.removeEventListener('mousemove', onMouseMove);
});

// 5. マウスが動いているときに実行される処理
function onMouseMove(e) {
    // ドラッグ中でないときは、何もせずに終了する
    if (!isDragging) return;

    // スクロールバーの幅を取得する
    const lineWidth = document.querySelector('.scroll-bar-line').offsetWidth;

    // スクロールボタンの新しい位置を計算する
    // e.clientX はマウスのX座標（画面上の位置）
    // document.querySelector('.scroll-bar').getBoundingClientRect().left はスクロールバーの左端の位置
    let newX = e.clientX - document.querySelector('.scroll-bar').getBoundingClientRect().left;

    // スクロールボタンがスクロールバーの範囲内に収まるように制限する
    // ボタンがスクロールバーの左端を越えないようにする（0より小さくならないようにする）
    // ボタンがスクロールバーの右端を越えないようにする（スクロールバーの幅からボタンの幅を引いた値を超えないようにする）
    newX = Math.max(0, Math.min(newX, lineWidth - scrollBtn.offsetWidth));

    // スクロールボタンの位置を新しい位置に設定する
    // `${newX}px` で新しい位置をピクセル単位で指定する
    scrollBtn.style.left = `${newX}px`;

    // スライダーの位置をスクロールボタンの位置に合わせる
    // (newX / lineWidth) でスクロールボタンの位置を0から1の範囲に変換する
    // (swiper.slides.length - 0.01) でスライドの数に合わせて調整する
    // Math.round で最も近いスライド番号に丸める
    // swiper.slideTo でそのスライドに移動する
    const slideIndex = Math.round((newX / lineWidth) * (swiper.slides.length - 0.01));
    swiper.slideTo(slideIndex);
}
