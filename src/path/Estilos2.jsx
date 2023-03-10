import React from 'react'

class Estilos2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let age=38;
        const titulo={
            textAlign: 'Center',
            color: 'green',
            backgroundColor: age>=37 ? 'red' : 'orangered'
        }

        return (  
            <>
            <h1 style={titulo} > soy un titulo </h1>
            </>
        );
    }
}
 
export default Estilos2;