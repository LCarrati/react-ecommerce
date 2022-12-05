import React from 'react'
import { Container } from './styles'
import { FaGithub } from 'react-icons/fa'

const FooterCredits = () => {
  return (
    <Container>
        Criado por Leonardo Carrati <FaGithub size={'27px'} className="githubIcon"/>
    </Container>
  )
}

export default FooterCredits