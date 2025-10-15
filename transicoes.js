document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;
    body.classList.add('page-loaded');

    const links = document.querySelectorAll('a');
    const botoes = document.querySelectorAll('button[type="button"]');

    function transicaoSaida(e, url) {
    if (!url) return;
    
    e.preventDefault();
    
    body.classList.add('page-exit');
    
    setTimeout(() => {window.location.href = url;}, 400);
}
    links.forEach(link => {link.addEventListener('click', function(e) {
        const url = this.getAttribute('href');
        if (url && url !== '#' && !url.startsWith('javascript:')) {
        transicaoSaida(e, url);
        }
    });
});

    botoes.forEach(botao => {const linkPai = botao.closest('a');
    if (linkPai) {
        botao.addEventListener('click', function(e) {
        const url = linkPai.getAttribute('href');
        if (url && url !== '#') {
            transicaoSaida(e, url);
        }
        });
    }
    });
});