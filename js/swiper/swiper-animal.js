// Swiper（スライドショーのライブラリ）を使って、スライドショーを作る
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,  // 一度に見えるスライドの数を1にする
    effect: 'slide',   // スライドを「スライドする」動きにする
    speed: 1000,       // スライドが動くスピードを1000ミリ秒（1秒）にする
});

// スライドを動かすためのスクロールバー（つまみ）の動きを作る
const scrollBtn = document.getElementById('scrollBtn'); // スクロールボタンを探して、その要素を「scrollBtn」に入れる
let isDragging = false; // 最初はドラッグしていないので「false」にする

// スクロールボタンを押したときの動きを決める
scrollBtn.addEventListener('mousedown', (e) => {
    isDragging = true; // ボタンを押すとドラッグ中になるので「true」にする
    document.addEventListener('mousemove', onMouseMove); // マウスが動いたときにonMouseMoveが動くようにする
});

// マウスのボタンを離したときの動きを決める
document.addEventListener('mouseup', () => {
    isDragging = false; // ボタンを離すとドラッグが終わるので「false」にする
    document.removeEventListener('mousemove', onMouseMove); // マウスが動くときのonMouseMoveを解除する
});

// マウスを動かしている間にやることを決める
function onMouseMove(e) {
    if (!isDragging) return; // ドラッグしてないときは何もしない

    const scrollBar = document.querySelector('.scroll-bar'); // スクロールバー（線の部分）を探して「scrollBar」に入れる
    const lineWidth = scrollBar.offsetWidth; // スクロールバーの幅を「lineWidth」に入れる

    // マウスの位置からスクロールバーの左端までの距離を引いて、新しいスクロールボタンの位置を計算する
    let newX = e.clientX - scrollBar.getBoundingClientRect().left;

    // スクロールボタンがスクロールバーの中に収まるように位置を調整する
    newX = Math.max(0, Math.min(newX, lineWidth - scrollBtn.offsetWidth));

    // 計算した位置にスクロールボタンを動かす
    scrollBtn.style.left = `${newX}px`;

    // スライドをスクロールボタンの位置に合わせて動かす
    const slideIndex = Math.round((newX / (lineWidth - scrollBtn.offsetWidth)) * (swiper.slides.length - 1));
    swiper.slideTo(slideIndex); // スライドを計算した位置に移動させる
}

// 画面のサイズが変わったときにスクロールボタンの位置を再計算して動かす
window.addEventListener('resize', () => {
    const scrollBar = document.querySelector('.scroll-bar'); // スクロールバーを探す
    const lineWidth = scrollBar.offsetWidth; // スクロールバーの幅を取得する

    // 現在のスライドの位置に合わせてスクロールボタンの位置を計算する
    const newX = (swiper.activeIndex / (swiper.slides.length - 1)) * (lineWidth - scrollBtn.offsetWidth);
    scrollBtn.style.left = `${newX}px`; // 新しい位置にスクロールボタンを動かす
});
