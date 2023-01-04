import React from 'react'
import { Container } from './styles'
import logo from '../../../assets/sLogo.png'

const FooterBottom = () => {
  return (
    <Container>
        <div className="footerBottomSection">
          <div>
            <img src={logo} alt="" />
            {/* <h4>Projeto desenvolvido em React.js por Leonardo Carrati</h4> */}
            <h4>Tecnologias utilizadas:</h4>
            <p><span>Linguagem:</span> Javascript;</p>
            <p><span>Framework:</span> React.js;</p>
            <p><span>React Hooks:</span> useState, useContext, useReducer e useEffect;</p>
            <p><span>Packages:</span> Styles-components, React-icons e React-router-dom;</p>
            <p><span>Editor:</span> VScode e Bloco de notas;</p>
          </div>
          <div>
            <h4 className='littleMargin'>Documentação</h4>
            <p><a href="http://github.com/LCarrati/react-ecommerce"  target="_blank">Acessar GitHub do projeto</a></p>
            <p><a href="http://www.linkedin.com/in/leonardo-carrati"  target="_blank">Entrar em contato</a></p>
          </div>
        </div>
    </Container>
  )
}

export default FooterBottom