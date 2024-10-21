
import React, { useState } from 'react';
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {

  // let esp = '10px'
  // let cor = 'purple'

  let [ nome, setNome] = useState ('')
  let [ idade, setIdade] = useState ('')
  let [ profissao, setProfissao] = useState ('')
  let [usuarioCadastrado, setUsuarioCadastrado] = useState(null)


  function carregarDdaos() {
    setNome (document.getElementById('nome').value)
    setIdade (document.getElementById('idade').value)
    setProfissao (document.getElementById('profissao').value)

    let cadastro = {
      nome: nome,
      idade:idade,
      profissao:profissao,
    }
    setUsuarioCadastrado(cadastro)
    console.log(usuarioCadastrado)

  //   console.log(`nome: ${nome}, idade: ${idade}, profissao: ${profissao}`)
   }
  return (
    <>
   
      {/* <h1>Título</h1>
      <input type="text" placeholder='Digita a cor ai' /><br /> */}

      <h1>Título</h1>
      <input id='nome' type="text" placeholder='Digite seu nome' /><br />
      <input type="text" placeholder='Digite sua idade' /><br />
      <input type="text" placeholder='Digite sua profisão' /><br />
      <button onClick={carregarDdaos}>carregar dados</button>

      {/* <Comp1 cor={cor} estilo='solid' esp={esp} /> */}
      {/* <Comp1 usuário={nome} idade={idade} profissao={profissao} /> */}
      {usuarioCadastrado && (<Comp1 />)}
    </>
  )
}

export default App
