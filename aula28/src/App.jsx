import { useState } from 'react';
import './App.css';
import Comp1 from './componentes/Comp1';

function App() {
  return (
    <div>
      <h1>Aula imagens</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veniam itaque obcaecati maxime? Voluptatibus aperiam repellat, nesciunt soluta ea enim. Itaque quas doloremque maxime facere in atque unde, et adipisci.</p>
      <img src="imagens/OIP.jpg" alt="Description of OIP.jpg" />
      <img src="imagens/OIP3.jpg" alt="Description of OIP3.jpg" />
      <img src="imagens/OIP.jpg" alt="Description of OIP.jpg" />

      <h1>Hook</h1>
      <Comp1 />
    </div>
  );
}

export default App;
