import React, {useContext} from 'react'
import { Wrapper } from './styles'
import { CartContext } from '../../../Reducer'

const DetailsDetail = ({name,price,id}) => {
  const {setCart} = useContext(CartContext)
  const handleAddToCart = () => {
    setCart({
      type:'ADD',
      payload:{
        productId:id,
        productPrice:price,
      }
    })
  }

  return (
    <Wrapper>
      <h3>{name}</h3>
      <p className="codSKU">Código: <span>{id}</span></p>
      <p className="selectOption">Selecione uma opção:</p>
      <ul>
        <li><span>Opcao 1</span></li>
        <li><span>Opcao 2</span></li>
      </ul>
      <p className="price">Por <span>{(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
      <p className='credit'>em até <span>12x</span> de <span>{(price/12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
      <div className='buyButtonBorder'><button onClick={handleAddToCart}>Comprar</button></div>
    </Wrapper>
  )
}

export default DetailsDetail