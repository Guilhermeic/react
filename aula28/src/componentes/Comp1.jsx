import { useState } from 'react'
import styles from './Comp1.module.css'

function Comp1() {

    let imagens = ['OIP.jpg', 'OIP3.jpg']
    let imagens2 = ['OIP.jpg', 'OIP3.jpg']

    let [imgAtual, setImgAtual] = useState(imagens[0])
    let [imgAt2, setImgAt2] = useState(imagens2[0])
    let[tamanho,setTamanho] = useState(200)
    function aumenta (){
        setTamanho (tamanho + 50)
    }
    function diminui (){
        setTamanho (tamanho - 50)
    }


    function trocarImagen() {
        if (imgAt2 == imagens2[0]) {
            setImgAt2(imagens2[1])
        } else {
            setImgAt2(imagens2[0])
        }
    }

    return (
        <>
            <h1>Hooks</h1>
            <h2>Principais Hooks</h2>

            <ul className={styles.lista}>
                <li>useState</li>
                <li>useEffect</li>
                <li>useContext</li>
                <li>useReducer</li>
                <li>useMemo</li>
                <li>useCallback</li>
            </ul>


            <h2>useState</h2>

            <img onClick={
                () => {
                    imgAtual == imagens[0] ? setImgAtual(imagens[1]) : setImgAtual(imagens[0])

                }
            } src={imgAtual} alt="" />
            <br />
            <img onClick src={imagens[0]} alt={imagens2} />

           

            <img src="OIP3.jpg" alt="" width = {`${tamanho} px `}/>
            <input onClick = {aumenta} type="submit"/>
            <input onClick = {diminui} type="submit"/>
        </>
    )
}

export default Comp1
