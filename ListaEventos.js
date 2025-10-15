
const eventosExemplo = [
    {
        nomeComunicador: "ANDRESSA ROJCKS",
        especializacao: "Nutricionista",
        organizador: "João Silva",
        categoria: "Saúde",
        data: "15/12/2025"
    }
];

function carregarEventos() {
    const corpoTabela = document.getElementById('corpo-tabela');
    
    if (eventosExemplo.length === 0) {
        corpoTabela.innerHTML = '<tr><td colspan="5" class="sem-dados">Nenhum evento cadastrado ainda.</td></tr>';
        return;
    }

    corpoTabela.innerHTML = '';
    
    eventosExemplo.forEach(evento => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${evento.nomeComunicador}</td>
            <td>${evento.especializacao}</td>
            <td>${evento.organizador}</td>
            <td>${evento.categoria}</td>
            <td>${evento.data}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}
document.addEventListener('DOMContentLoaded', carregarEventos);