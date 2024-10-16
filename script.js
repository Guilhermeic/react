
const url = 'https://viacep.com.br/ws';
let cep = document.getElementById('cep');
let form = document.getElementById('form');
let conteudo = document.getElementById('conteudo');

form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    fetch(`${url}/${cep.value}/json/`).then(function (response) {
        return response.json()
    }).then(function (info) {
        conteudo.innerHTML += `
        Rua:  ${info.logradouro}
        Bairro: ${info.bairro}
        Cidade: ${info.localidade}
        `
    })
})