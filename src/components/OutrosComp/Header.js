import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import CalculatorTemp from "./../Temperaturas/CalculatorTemp";
import CalculatorLength from "./../Comprimentos/CalculatorLenght";
import './../Estilos/header.css'

function mouseentra(element){
    document.getElementById(element).style.display = 'block'
}
function mousesai(element){
    document.getElementById(element).style.display = 'none'
}

export default class Header extends Component {
  render() {
    return (
        <Router>
            <div className="menu">
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/" className="lnkmenu">
                                <button id="btnhome" onMouseOver={() => mouseentra('txthome')} onMouseLeave={() => mousesai('txthome')}/>
                                <span id="txthome">Inicial</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/temperatura" className="lnkmenu">
                                <button id="btntemp" onMouseOver={() => mouseentra('txttemp')} onMouseLeave={() => mousesai('txttemp')}/>
                                <span id="txttemp">Temperatura</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/comprimento" className="lnkmenu">
                                <button id="btncomp" onMouseOver={() => mouseentra('txtcomp')} onMouseLeave={() => mousesai('txtcomp')}/>
                                <span id="txtcomp">Comprimento</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Switch>
                        <Route path="/temperatura">
                            <CalculatorTemp />
                        </Route>
                        <Route path="/comprimento">
                            <CalculatorLength />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div> 
            </div>
        </Router>
    );
  }
}
