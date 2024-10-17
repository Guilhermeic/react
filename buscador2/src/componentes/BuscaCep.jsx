import Buscar from "./Buscar"

const BuscaCep = () => {

    return (

        <>
            <h1>BuscaCep</h1>
            <form>
                <label>Cep</label>
                <input id="cep"/>
                <button id= "button" onClick={event => {event.preventDefault; Buscar()}}>Buscar</button>
            </form>
        </>
    )
}
export default BuscaCep