import { useState } from 'react';
import styles from './Comp1.module.css'

function Comp1({cor,estilo,esp}) {

    let borda = {border:`${cor} ${estilo} ${esp}`}
    
    
    // let borda2 = { border: '1px solid red' };
    // let borda1 = { border: '1px solid  blue' };

    // let [borda, setBorda] = useState(borda1)

    // function alterarBorda() {
    //         if (borda.border == borda1.border) {
    //             setBorda(borda2)
    //         } else {
    //             setBorda(borda1)
    //         }
    //     // }
    

    return (
        <>
        {/* style={borda} */}
            <p > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero sunt impedit aliquid vitae voluptate. Maxime animi pariatur veritatis dolor, perspiciatis sapiente, aperiam delectus ipsum magnam neque culpa esse beatae quis.</p>
            <button>Alterar bordas</button>
        </>
    )
}

export default Comp1