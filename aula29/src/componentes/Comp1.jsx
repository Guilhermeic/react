import { useState } from 'react';
import styles from './Comp1.module.css'

function Comp1({ cor, estilo, esp }) {

    return (
        <>
            <button onClick={mostrarUsuario} type='button'> Mostrar Usuário</button>
            <p>
                nome: {usuario.nome}, idade: {usuario.idade}, profissao: {usuario.profissao};
            </p>
        </>
    )
}

export default Comp1