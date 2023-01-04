import React from 'react'
import { Container } from './styles'
import { FaGithub } from 'react-icons/fa'

const FooterCredits = () => {
  return (
    <Container>
        Criado por Leonardo Carrati <a href="http://github.com/LCarrati" target="_blank"><FaGithub size={'27px'} className="githubIcon"/></a>
    </Container>
  )
}

export default FooterCredits