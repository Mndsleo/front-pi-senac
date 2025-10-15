document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.checkin-form');

    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem-sucesso';
    mensagem.innerHTML = '✓ Check-in realizado com sucesso!';
    
    document.body.appendChild(mensagem);
    
    setTimeout(() => {mensagem.classList.add('show');}, 10);
    
    setTimeout(() => {mensagem.classList.remove('show');
    setTimeout(() => {mensagem.remove();}, 300);}, 3000);
    
    form.reset();
    
    setTimeout(() => {window.location.href = 'Usuario.html';}, 3000);
    });
});