import React from "react";
import convert from "./Functions";
import LenghtSelect from "./LenghtSelect";
import LenghtInput from "./LenghtInput";

import data from './../Database/db.json';

import './../Estilos/geral.css';
import './../Estilos/comprimento.css';



const escalaData =  data.lenghts;

const convertion = convert;

class CalculatorLenght extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toIn: 0,
      toOut: 0,
      comprimento: 0,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOutputChange = this.handleOutputChange.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleNumberChange(evt) {
    this.setState({
      comprimento: evt.target.value,
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
    const distanciaFinal = convertion(entrada, saida, this.state.comprimento);
    document.getElementById("compfinal").value = distanciaFinal;
  }

  clear(evt) {
    document.getElementById("entryNumber").value = "";
    document.getElementById("compfinal").value = "";
    document.querySelectorAll("select")[0].selectedIndex = 0;
    document.querySelectorAll("select")[1].selectedIndex = 0;
    this.setState({
      toIn: 0,
      toOut: 0,
      comprimento: 0,
    });
  }

  render() {
    const scaleIn = this.state.toIn;
    const scaleOut = this.state.toOut;
    return (
      <div className="conteudo" id="compcontent">
        <fieldset>
          <legend>Conversor de Comprimento</legend>
          <div className="fieldset-content">
          <div className="entrada">
            <h2>Entrada:</h2>
            <p>Escolha a escala de entrada:</p>
            <LenghtSelect id={"selectIn"} onChange={this.handleInputChange} />
            <p>
              Informe a Distância em {escalaData[scaleIn].name} (
              {escalaData[scaleIn].unit}):
            </p>
            <LenghtInput id={"entryNumber"} value={this.state.temperature } onChange={this.handleNumberChange} />
          </div>
          <div className="saida">
            <h2>Saída: </h2>
            <p>Escolha a escala de saída:</p>
            <LenghtSelect id={"selectOut"} onChange={this.handleOutputChange} />
            <p>
              Distância em {escalaData[scaleOut].name} (
              {escalaData[scaleOut].unit}):
            </p>
            <input type="text" id="compfinal" disabled="disabled" />
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

export default CalculatorLenght;
