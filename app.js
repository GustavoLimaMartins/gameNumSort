function sortear() {
    let qtde = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if ((inicio > fim) || (qtde > ((fim - inicio) + 1))){
        alert('Valores inseridos incorretamente, verifique os campos!');
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('quantidade').value = '';
        return;
    };

    for (let i = 0; i < qtde; i++){
        numero = gerarNum(inicio, fim);
        while (sorteados.includes(numero) == true) {
            numero = gerarNum(inicio, fim);
        }
        sorteados.push(numero);
    };

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
};

function gerarNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function alterarStatusBotao() {
    let btn = document.getElementById('btn-reiniciar');
    
    if (btn.classList.contains('container__botao-desabilitado')){
        btn.classList.remove('container__botao-desabilitado');
        btn.classList.add('container__botao');
    }else{
        btn.classList.remove('container__botao');
        btn.classList.add('container__botao-desabilitado');
    }
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
};

