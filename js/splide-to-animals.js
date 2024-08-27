document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type       : 'loop',
        perPage    : 1,
        pagination : true, // ページネーションボタンを非表示
        arrows     : false, // ナビゲーションボタンを非表示
        autoplay   : true,
        interval   : 3000
    }).mount();
});
