import React from "react";
import convert from "./Functions";
import TemperatureSelect from "./TemperaturaSelect";
import TemperatureInput from "./TemperaturaInput";

import data from './../Database/db.json';

import './../Estilos/geral.css';
import './../Estilos/temperatura.css';

const escalaData =  data.temperatures;

const convertion = convert;

class CalculatorTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toIn: 0,
      toOut: 0,
      temperature: 0,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOutputChange = this.handleOutputChange.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleNumberChange(evt) {
    this.setState({
      temperature: evt.target.value,
    });
  }

  handleInputChange(evt) {
    this.setState({
      toIn: evt.target.value,
    });
  }

  handleOutputChange(evt) {
    this.setState({
      toOut: evt.target.value,
    });
  }

  handleClickButton(evt) {
    const entrada = this.state.toIn;
    const saida = this.state.toOut;
    const temperaturaFinal = convertion(entrada, saida, this.state.temperature);
    const inputTemp = document.getElementById("tempfinal")
    inputTemp.value = temperaturaFinal;
  }

  clear(evt) {
    document.getElementById("entryNumber").value = "";
    document.getElementById("tempfinal").value = "";
    document.querySelectorAll("select")[0].selectedIndex = 0;
    document.querySelectorAll("select")[1].selectedIndex = 0;
    this.setState({
      toIn: 0,
      toOut: 0,
      temperature: 0
    })
  }

  render() {
    const scaleIn = this.state.toIn;
    const scaleOut = this.state.toOut;
    return (
      <div className="conteudo" id="tempcontent">
        <fieldset>
          <legend>Conversor de Temperatura</legend>
          <div className="fieldset-content">
            <div className="entrada">
              <h2>Entrada:</h2>
              <p>Escolha a escala de entrada:</p>
              <TemperatureSelect id={"selectIn"} onChange={this.handleInputChange} />
              <p>
                Informe a temperatura em {escalaData[scaleIn].name} (
                {escalaData[scaleIn].unit}):
              </p>
              <TemperatureInput id="entryNumber" value={this.state.temperature} onChange={this.handleNumberChange} />
            </div>
            <div className="saida">
              <h2>Saída: </h2>
              <p>Escolha a escala de saída:</p>
              <TemperatureSelect id={"selectIn"} onChange={this.handleOutputChange} />
              <p>
                Temperatura em {escalaData[scaleOut].name} (
                {escalaData[scaleOut].unit}):
              </p>
              <input type="text" id="tempfinal" disabled="disabled" />
            </div>
          </div>
          <div className="buttonGroup">
            <button onClick={this.handleClickButton}>Calcular</button>
            <button onClick={this.clear}>Limpar</button>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default CalculatorTemp;

