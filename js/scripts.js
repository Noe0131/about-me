document.addEventListener('DOMContentLoaded', function () {
    // 新しいSplideスライダーを #splide 要素に初期化する
    new Splide('#splide', {
        type: 'loop', // スライダーをループモードに設定
        perPage: 2, // 1ページに表示されるスライドの数を2に設定
        autoplay: true, // 自動再生を有効にする
        interval: 3000, // 自動再生の間隔を3000ミリ秒（3秒）に設定（修正: 'interav' から 'interval' に修正）
        pauseOnHover: true, // マウスホバー時に自動再生を一時停止（修正: 'pausOnHover' から 'pauseOnHover' に修正）
        focus: 'center', // スライダーが中央にフォーカスされるように設定
        gap: '0.5rem', // 各スライド間の間隔を0.5remに設定
        breakpoints: {
            767: {
                perPage: 1, // 画面幅が767ピクセル以下の場合、1ページに表示されるスライドの数を1に設定
            },
        },
    }).mount(); // Splideインスタンスをマウントして、スライダーを表示する
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

// 世界遺産ページのタブメニュー
document.addEventListener('DOMContentLoaded', () => {
    // タブメニューを初期化する関数
    const initializeTabs = (containerId) => {
        const container = document.getElementById(containerId); // -- タブメニューコンテナを取得 --
        const tabs = container.querySelectorAll('.tab-link'); // -- すべてのタブリンクを取得 --
        const panes = container.querySelectorAll('.tab-pane'); // -- すべてのタブペインを取得 --

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = container.querySelector(`#${tab.getAttribute('data-tab')}`); // -- クリックされたタブの対応するタブペインを取得 --

                // すべてのタブとコンテンツから 'active' クラスを削除
                tabs.forEach(t => t.classList.remove('active')); // -- すべてのタブリンクから 'active' クラスを削除 --
                panes.forEach(p => p.classList.remove('active')); // -- すべてのタブペインから 'active' クラスを削除 --

                // クリックされたタブとその対応するコンテンツに 'active' クラスを追加
                tab.classList.add('active'); // -- クリックされたタブリンクに 'active' クラスを追加 --
                target.classList.add('active'); // -- 対応するタブペインに 'active' クラスを追加 --
            });
        });
    };

    // 各タブメニューコンテナを初期化
    initializeTabs('tab-container-1'); // -- 最初のタブメニューコンテナを初期化 --
    initializeTabs('tab-container-2'); // -- 二番目のタブメニューコンテナを初期化 --
});
