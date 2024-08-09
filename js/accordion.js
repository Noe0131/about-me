// .accordion-toggle クラスを持つすべての要素に対して、クリックイベントを設定
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        // クリックされたアコーディオンの親要素を取得
        const accordion = button.parentElement;
        
        // アコーディオンのコンテンツを取得
        const content = accordion.querySelector('.accordion-content');
        
        // アコーディオンのクラスを切り替えて、コンテンツを表示/非表示にする
        accordion.classList.toggle('active');
        
        // コンテンツの最大高さを設定して、アコーディオンの開閉アニメーションを実装
        if (accordion.classList.contains('active')) {
            // アコーディオンが開かれた場合、コンテンツのスクロール高さを最大高さとして設定
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            // アコーディオンが閉じられた場合、最大高さを 0px に設定してコンテンツを非表示にする
            content.style.maxHeight = '0px';
        }
    });
});


