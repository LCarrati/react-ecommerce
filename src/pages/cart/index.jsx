import React, { useContext } from 'react'
import { CartList, CartTotal, Empty, Wrapper } from './styles'
import { PageCartItems } from '../../components/pageCartItems'
import { FaCheck } from 'react-icons/fa'
import { CartContext } from '../../Reducer'
import Button from '../../components/button'

let priceTotal = 0



const PageCart = () => {
  const { cart } = useContext(CartContext)

  const cartTotally = [...cart]
  const result = cartTotally.reduce((sum, { productPrice, amount }) => sum + productPrice * amount, 0) //Calculando o valor total do carrinho

  return (
    cart.length>0 ? ( //Verificar se existem itens no carrinho
    <Wrapper>
      <h1>Carrinho: <span>Clique em finalizar compra para efetuar o seu pedido.</span></h1>
      <CartList>
        <div className="tableHeader">
              <div>
                <h5>Produto</h5>
              </div>
              <div>
                <h5>Preço unitário</h5>
              </div>
              <div>
                <h5>Quantidade</h5>
              </div>
              <div>
                <h5>Subtotal</h5>
              </div>
              <div>
                <h5>Excluir</h5>
              </div>        
        </div>

        {cart.map((item) => <PageCartItems amount={item.amount} prodInCartId={item.productId} key={item.productId} />)} 

      </CartList>

      <CartTotal>
      <p>Total {(result).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p>Em até 12x de {(result/12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </CartTotal>
      <div className='checkoutButtonArea'>
        <div><Button label={'Finalizar compra'} icon ={<FaCheck />}/></div>
      </div> 
    </Wrapper>) : (<Empty className='empty'><p>Carrinho vazio</p></Empty>) 
  )
}

export default PageCart