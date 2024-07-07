// Slickスライダーの初期化
$('#js-slider').slick({
    dots: true, // ナビゲーション用のドットを表示
    speed: 500 // 500msの遷移速度
});

// ハンバーガーメニューのトグル
$(document).ready(function() {
    $('#js-hamburger').on('click', function(e) {
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

