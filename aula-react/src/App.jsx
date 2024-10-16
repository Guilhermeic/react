import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes/Componente1'
import imagens from './componentes/imagens'

function App() {
  let estiloTitulo3 = {
    backgroundColor: 'Red',
    color: 'green'
  }

  let estilo

  let azul = false

  let estiloBotao = {
    backgroundColor: azul == true ? 'blue' : 'gray',
    color: 'white',
    padding: '10px'
  }

  return (
    <>
      <div>
        <h1>Aula 27</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate laboriosam maiores explicabo harum neque saepe non! Aliquam sequi ipsam quasi. Commodi deserunt optio obcaecati unde pariatur provident tempora non.</p>
        <h1>Título 2</h1>
        <p className='paragrafo1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit molestias cum optio natus sequi temporibus velit, aperiam deserunt earum vitae, tempora aliquam, nesciunt totam accusamus. Nisi iure eligendi eos illum?</p>
      </div>
      <Componente1 />
      {/* CSS inline */}

      <h1 style={estiloTitulo3}>Título 3</h1>

      <p style={{ backgroundColor: 'gray', color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo delectus dolore ea porro consectetur quibusdam nisi officia laboriosam quas rem nulla repellendus, atque accusamus, mollitia minus tempore omnis veniam.</p>

      <button style={estiloBotao}> Click aqui</button>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, id fugit expedita magnam facilis necessitatibus? Quaerat corporis quasi id similique. Ipsam eum dolorum autem amet, aperiam esse dolore architecto iure!</p>
   
      <imagens />

    </>
  )
}

export default App
