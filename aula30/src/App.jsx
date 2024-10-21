import { useState } from 'react'
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {
  let [mostrar, setMostrar] = useState(false)
let [msgBtn, setMsgBtn] = useState('Mostrar parágrafo')

  function mostrarParagrafo() {
    if ( mostrar == true){
      setMostrar(false)
      setMsgBtn('Mostrar Paragrafo')
    }else{
      setMostrar(true)
      setMsgBtn('Esconder Paragrafo')
    }
  }

  return (
    <>
      <button onClick={mostrarParagrafo}>{msgBtn}</button>
      {mostrar && (
        <div>
          <h2>Dormir</h2>
          <img src="https://images7.memedroid.com/images/UPLOADED411/65282e104c2ca.jpeg" alt="" width={'500px'} />
        </div>
      )}

<Comp1 />






    </>
  )
}

export default App
