import React, {createRef} from 'react';

const Ref = () => {
    const cambioColor=createRef()

    const cambioColorTexto=()=>{
        cambioColor.current.style.color='blue'
    }
        return (
            <>
                <h1 ref={cambioColor} >Soy un titulo y cambio de color</h1>
                <button onClick={cambioColorTexto}>cambioColorText</button>
            </>
        )
}

export default Ref;