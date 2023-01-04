import React from 'react'
import { Container } from './styles'

const NotFound = () => {
  return (
    <Container>
        <h1>Setor em construção</h1>
        <p>Você tentou acessar uma funcionalidade ainda não implementada.<br />
        <b>Está quase saíndo!!</b> Mas se vc ficar aqui olhando vai demorar mais...<br />
        Veja os outros setores do site enquanto terminamos por aqui!!</p>
        <img src="./404.jpg" alt="" srcset="em construção" />
    </Container>

  )
}

export default NotFound