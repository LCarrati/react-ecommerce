import React from 'react'
import { Wrapper } from './styles'
import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

const UserMenu = () => {
  return (
    <Wrapper>
        <Link to={'/emconstrucao'}><MdAccountCircle size={'39px'}/><p>Entrar ou <br /> Cadastrar</p></Link>
    </Wrapper>
  )
}

export default UserMenu