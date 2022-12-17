import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CartContext } from '../../Reducer'
import { AlertContext } from '../alertMessage/alertContext'
import Button from '../button'
import { Wrapper } from './styles'

const ProductCard = ({name, image, price, discount, id}) => {

  const {setCart} = useContext(CartContext) //chamando o contexto que permite alterar o CART
  const { setAlert, displayAlert } = useContext(AlertContext)
 
  const handleAddToCart = () => {
    setCart({
      type:'ADD',
      payload:{
        productId:id,
        productPrice:price,
      }
    })
    displayAlert()
  }

  return (
    <Wrapper>
        <Link to={`/details/${id}`}><img src={image[0]} alt="" /></Link>
        <Link to={`/details/${id}`}><p className='productName'>{name}</p></Link>
        <p className='productPrice'>{(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p>até <span>12x</span> de <span>{(price/12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span> sem juros</p>
        <hr />
        <Button label="Adicionar ao carrinho" onClick={handleAddToCart}/>
        <Link to={`/details/${id}`}><Button label="Ver mais detalhes" styles={'verMais'}/></Link>
    </Wrapper>
  )
}

export default ProductCard