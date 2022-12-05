import React from 'react'
import { Wrapper } from './styles'
import { MdAccountCircle } from 'react-icons/md'

const UserMenu = () => {
  return (
    <Wrapper>
        <MdAccountCircle size={'39px'}/><p>Entrar ou <br /> Cadastrar</p>
    </Wrapper>
  )
}

export default UserMenu