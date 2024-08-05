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
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0px';
        }
    });
});

