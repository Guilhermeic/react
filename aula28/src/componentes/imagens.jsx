function Imagens() {

    let [tamanho, setTamanho] = useState(150)

function aumentar(){
    setTamanho(tamanho+50)
    console.log(tamanho)
}

    return (
        <>

            <img src="OIP.jpg" alt="" width={`${tamanho}px`}/>
            <br />
            <button onClick={aumentar} >Aumentar</button>
            <button onClick={()=>{setTamanho(tamanho - 20); console.log(tamanho)}}>Reduzir</button>
        </>
    )
}