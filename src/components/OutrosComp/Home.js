import React from 'react';
import './../Estilos/geral.css';
import './../Estilos/home.css';

const Home = () => {
    return (
    <div className="conteudo">
        <div className="titulo">
            <h2>Conversor de Medidas</h2>
            <div className="medidas">
                <div className="temperatura">
                    <a href='/temperatura'>
                        <img src="/images/hometemp.png" alt="Temperatura"/><span>Temperatura</span>
                    </a>
                </div>
                <div className="comprimento">
                    <a href='/comprimento'>
                        <img src="/images/homecomp.png" alt="Comprimento"/><span>Comprimento</span>
                    </a>
                </div>
            </div>
        </div>
        <img className="imagem" src="/images/conversao.png" alt="Conversão" />
    </div>
    )
}

export default Home