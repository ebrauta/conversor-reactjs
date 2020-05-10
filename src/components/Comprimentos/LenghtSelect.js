import React from "react";
import './../Estilos/geral.css'

import data from './../Database/db.json';

import './../Estilos/geral.css'

const escalaData =  data.lenghts;

class LenghtSelect extends React.Component {
  render() {
    return (
      <select id={this.props.selection} onChange={this.props.onChange}>
        {escalaData.map((item) => (<option key={item.value} value={item.value}> {item.name} </option>))}
      </select>
    );
  }
}

export default LenghtSelect;
