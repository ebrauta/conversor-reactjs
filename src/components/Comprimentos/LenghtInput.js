import React from "react";
import './../Estilos/geral.css'

class LenghtInput extends React.Component {
  render() {
    return <input id={this.props.id} type="number" value={this.props.value} onChange={this.props.onChange} />
  }
}

export default LenghtInput;
