import React, { useContext } from 'react'
import { Wrapper, CartItemsWrapper } from './styles'
import { Link, useParams } from 'react-router-dom'
import { Produtos } from '../../../../products/products'

import { CartContext } from '../../../../Reducer'
import Button from '../../../button'


const CartItems = ({amount, ProdInCartId}) => {
  const { setCart } = useContext(CartContext)

  const thisProduct = Produtos.find(prod => prod.id == ProdInCartId)

  const handleRemove = () => {
    setCart({
      type:'REMOVE',
      payload:{
        productId:ProdInCartId,
      }
    })
  }   

  return (
    <CartItemsWrapper>
      <div>{amount} x {thisProduct.name}</div>
      <div>{(thisProduct.value * amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      <div className='minicartButtonHeader'><Button label={'Remover'} onClick={handleRemove} styles={'remover'}/></div>
    </CartItemsWrapper>
  )
}

const MiniCart = () => {

  const { cart } = useContext(CartContext) 

  const cartTotally = [...cart]
  const result = cartTotally.reduce( ( sum, { productPrice, amount } ) => sum + productPrice*amount , 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Wrapper>
        <h1>Carrinho:</h1>
        <hr />
        {cartTotally.length > 0 ? cart.map((item) => <CartItems amount={item.amount} key={item.productId} ProdInCartId={item.productId}/>) : <p className='emptyCartMessage'>Carinho vazio</p>}
        <hr />
        <div className='minicartTotalCheckout'><p>Total: {result}</p><Link to={'/emconstrucao'} className='linkFinalizarBotao'><Button label={'Finalizar compra'} /></Link></div>
    </Wrapper>
  )
}

export default MiniCart