import React from 'react'
import { Container } from './styles'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const FooterMid = () => {
  return (
    <Container>
        <div className='footerMidSection'>
          <div>
            <h4>Atendimento</h4>
            <p className='subtitle'>Whatsapp:</p>
            <p>(21) 92020-4267</p>  
            <hr />
            <p className='subtitle'>E-mail:</p>
            <p>contato@magnamix.com.br</p>
            <hr />
            <p className='subtitle'>Horário de atendimento</p>
            <p>seg a sex das 09h às 1</p>
          </div>
          <div>
            <h4>Categorias</h4>
            <p>Foguetes</p>
            <p>Sondas</p>
            <p>Satélites</p>
            <p>Telescópios</p>
          </div>
          <div>            
            <h4>Redes sociais</h4>
            <p className='socialIconsDiv'><FaInstagram size={'30px'}/><FaLinkedin size={'30px'}/><FaGithub size={'30px'}/></p>
          </div>
        </div>
    </Container>
  )
}

export default FooterMid