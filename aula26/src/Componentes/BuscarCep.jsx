


function BuscarCep() {

    function enviaCep() {
        let cepDigitado = document.getElementById('cep').value
        alert(cepDigitado)
        fetch (`https://viacep.com.br/ws/${cepDigitado}/json/`)
        
        .then((resposta) => resposta.json())
          .then((cep) => {
             alert(cep.bairro)
          })
          .catch((erro) => {
            //Seu código vai aqui!!!
          });
    }

    return (
        <>

            <input id="cep" type="text" placeholder="Digite seu CEP" />
            <button onClick={enviaCep} type="button">Enviar</button>
        </>
    )
}

export default BuscarCep