document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.querySelector('#data');

    dataInput.addEventListener('input', (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
        value = value.substring(0, 8); // Limita o número de caracteres
        if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2);
        if (value.length > 5) value = value.substring(0, 5) + '/' + value.substring(5);
        e.target.value = value;
    });
});


const data = document.querySelector('#data');
const cargas = document.querySelector('#cargas');
const motorista = document.querySelector('#motorista');
const descricao = document.querySelector('#descricao');
const responsavel = document.querySelector('#responsavel');
const escolhas = document.querySelector('#escolhas');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

botao.addEventListener("click", () => {
    const novo_elemento = document.createElement('p');
    if(escolhas.value=="analisando"){
        novo_elemento.style.color="Orange"
    }else if(escolhas.value=="pendente"){
        novo_elemento.style.color="red"
    }else{
        novo_elemento.style.color="green"
    }
    novo_elemento.innerHTML = `Data: ${data.value} -----> Carga: ${cargas.value} -----> /Motorista: ${motorista.value}-----> Descrição: ${descricao.value} -----> Responsável: ${responsavel.value} -----> Status: ${escolhas.value}`;
    resultado.append(novo_elemento);

    data.value=""
    cargas.value=""
    motorista.value=""
    descricao.value=""
    responsavel.value=""
    escolhas.value=""
    data.focus()
});




