const BuscaCep = () => {
    let url = "viacep.com.br/ws/"
    let elemento = document.getElementById('cep');
    let button = document.getElementsById('button');


    
    fetch(`${url}/${cep.value}/json`).then(function (response) {
       return response
    }).then (function(){

    })


    return (
        <>

        </>
    )
}
export default BuscaCep