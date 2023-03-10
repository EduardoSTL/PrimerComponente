
import React, {Component} from 'react'

class State extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Alejandra",
            apellidos: "Rodriguez",
        };
    }
    
    
    
    CambiarDatos() { 
        if (this.state.name === "Alejandra" 
        &&  this.state.apellidos === "Rodriguez")
            this.setState({name: "Maria", apellidos: "Perez"});
        else this.setState({name: "Alejandra", apellidos: "Rodriguez"});

    }
    render() {
        return (
            <>
        <h2>
        Mi nombre es {this.state.name} {this.state.apellidos} 
        </h2>
        <button onClick={this.CambiarDatos.bind(this)}>PULSAR</button>
            </>
        );
    }
}
 
export default State;