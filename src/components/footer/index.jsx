

import React, { useContext } from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { ListContext, prodList } from '../../products/productsContext'
import FooterMid from './footerMid'
import FooterBottom from './footerBottom'
import FooterCredits from './footerCredits'

const Footer = () => {
  const navigate = useNavigate();

  const { setListRender } = useContext(ListContext)

  const handleChange = (event) => {
    setListRender([...prodList].filter((produto) => ((produto.props.name.toUpperCase()).includes((event.target.value.toUpperCase())))))
  }

  return (
    <>
    <Container>
      <p>Mensagem aletoria</p>
    </Container>
    <FooterMid />
    <FooterBottom />
    <FooterCredits />
    </>
  )
}

export default Footer