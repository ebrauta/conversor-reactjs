import React from "react";
import './../Estilos/geral.css'

import data from './../Database/db.json';

import './../Estilos/geral.css'

const escalaData =  data.temperatures;

class TemperatureSelect extends React.Component {
  render() {
    return (
      <select id={this.props.selection} onChange={this.props.onChange}>
        {escalaData.map((item) => {
          return (
            <option value={item.value}> {item.name} </option>
          )
        })}
        {/* <option value={0}> {escalaData[0].name} </option>
        <option value={1}> {escalaData[1].name}</option>
        <option value={2}> {escalaData[2].name} </option>
        <option value={3}> {escalaData[3].name} </option> 
      */}
        </select>
    );
  }
}

export default TemperatureSelect;
