import React, { Component } from 'react'
import './../Estilos/geral.css'
import './../Estilos/footer.css'

class Footer extends Component{
    render(){
        return(
            <footer className="rodape">
                <h2><span className="brand-logo"> </span><span className="brand-name">Conversão</span><span className="copyright">Copyright &copy; 2020 EBR. Todos os direitos reservados.</span></h2>
                <ul className="foot-list">
                    <li>
                        <a href="https://github.com/ebrauta" title="GitHub">
                            <button id="lnkgithub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ebrauta" title="Facebook">
                            <button id="lnkfacebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ebrauta" title="Instagram">
                            <button id="lnkninstagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/ebrauta" title="Twitter">
                            <button id="lnktwitter" />
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer