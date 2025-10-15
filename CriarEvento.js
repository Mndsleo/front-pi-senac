document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.evento-form');
    
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem-sucesso';
    mensagem.innerHTML = '✓ Evento criado com sucesso!!!';
    
    document.body.appendChild(mensagem);
    
    setTimeout(() => {
        mensagem.classList.add('show');
    }, 10);
    
    setTimeout(() => {mensagem.classList.remove('show');
    setTimeout(() => {mensagem.remove();}, 300);}, 3000);
    
    form.reset();
    setTimeout(() => {window.location.href = 'Administrador.html';}, 3000);
    });
});