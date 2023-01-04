import React from 'react'
import { Container } from './styles'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FooterMid = () => {
  return (
    <Container>
        <div className='footerMidSection'>
          <div>
            <h4>Atendimento</h4>
            <p className='subtitle'>Whatsapp:</p>
            <p><a href="http://wa.me/5521920204267" target="_blank">(21) 92020-4267</a></p>  
            <hr />
            <p className='subtitle'>E-mail:</p>
            <p><a href="mailto:contato@magnamix.com.br" target="_blank">contato@magnamix.com.br</a></p>
            <hr />
            <p className='subtitle'>Horário de atendimento</p>
            <p>seg a sex das 09h às 18h</p>
          </div>
          <div>
            <h4>Categorias</h4>
            <p><Link to={'/category/Foguetes'} state={"Foguetes"}>Foguetes</Link></p>
            <p><Link to={'/category/Sondas'} state={"Sondas"}>Sondas</Link></p>
            <p><Link to={'/category/Satelites'} state={"Satelites"}>Satélites</Link></p>
            <p><Link to={'/category/Telescopios'} state={"Telescopios"}>Telescópios</Link></p>
          </div>
          <div>            
            <h4>Redes sociais</h4>
            <p className='socialIconsDiv'>
              <FaInstagram size={'30px'}/>
              <a href="http://www.linkedin.com/in/leonardo-carrati" target="_blank"> 
                <FaLinkedin size={'30px'}/>
              </a>
              <a href="http://github.com/LCarrati/" target="_blank">
                <FaGithub size={'30px'}/>
              </a>
            </p>
          </div>
        </div>
    </Container>
  )
}

export default FooterMid