import React from 'react'
import { Container } from './styles'

const Button = ({label, onClick, styles, icon}) => {
  return (
    <Container styles={styles} onClick={onClick}>{icon}{label}</Container>
  )
}

export default Button