
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {

  // let esp = '10px'
  // let cor = 'purple'

  let nome = ''
  let idade = ''
  let profissao = ''


  function carregarDdaos() {
    nome = document.getElementById('nome').value
    idade = document.getElementById('idade').value
    profissao = document.getElementById('profissão').value
  }
  return (
    <>
      {/* <h1>Título</h1>
      <input type="text" placeholder='Digita a cor ai' /><br /> */}

      <h1>Título</h1>
      <input id='nome' type="text" placeholder='Digite seu nome' /><br />
      <input type="text" placeholder='Digite sua idade' /><br />
      <input type="text" placeholder='Digite sua profisão' /><br />
      <button onClick={carregarDdaos}></button>

      {/* <Comp1 cor={cor} estilo='solid' esp={esp} /> */}
      <Comp1 nome={nome} idade={idade} profissao={profissao} />
    </>
  )
}

export default App
