// ページが完全に読み込まれたときに、指定された関数を実行する
document.addEventListener('DOMContentLoaded', function () {
    // #splideというIDを持つHTML要素に新しいSplideスライダーを初期化する
    new Splide('#splide', {
        // スライダーをループモードに設定する
        type: 'loop',
        // 1ページに表示されるスライドの数を2に設定する
        perPage: 2,
        // 自動再生
        autoplay: true,
        // 自動再生の間隔（ミリ秒）
        interav: 3000,
        // マウスホバー時に自動再生を一時停止
        pausOnHover: true,
        // スライダーが中央にフォーカスされるように設定する
        focus: 'center',
        // 各スライド間の間隔を1remに設定する
        gap: '0.5rem',
        // レスポンシブ設定を指定する
        breakpoints: {
            // 画面幅が767ピクセル以下の場合に適用される設定
            767: {
                // 1ページに表示されるスライドの数を1に設定する
                perPage: 1,
            },
        },
    // Splideインスタンスをマウントして、スライダーを表示する
    }).mount();
});



// ハンバーガーメニューのトグル
$(document).ready(function() {
    $('#js-hamburger').on('click', function(e) {
        console.log('TOTO');
        e.preventDefault(); // -- デフォルトのクリック動作を無効にする --
        $(this).toggleClass('is-opened'); // -- ハンバーガーアイコンにis-openedクラスをトグルする --
        $('.gnavi').toggleClass('is-opened'); // -- ナビゲーションメニューにis-openedクラスをトグルする --
    });
});

$(document).ready(function() {

    // ウィンドウサイズが変わった時の処理
    $(window).resize(function() {
        checkWidth(); // -- ウィンドウサイズが変わるたびにcheckWidth関数を呼び出す --
    });

    // 初期位置の設定
    checkWidth(); // -- ドキュメントの読み込み時にcheckWidth関数を呼び出す --

    // ハンバーガーメニューの表示切替の関数
    function checkWidth() {
        var windowWidth = $(window).width(); // -- 現在のウィンドウ幅を取得する --
        var breakpoint = 787; // -- 表示を切り替える画面の閾値 --

        if (windowWidth <= breakpoint) {
            $('.hamburger').css('display', 'flex'); // -- 画面幅が小さい場合にハンバーガーメニューを表示する --
        } else {
            $('.hamburger').css('display', 'none'); // -- 画面幅が大きい場合にハンバーガーメニューを非表示にする --
        }
    }
});



  

