import React, {Component} from "react";

class PrimerComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1> hola mundo desde el primer componente </h1>
      </>
    );
  }
}

export default PrimerComponente;
