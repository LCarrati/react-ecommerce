import React, {useState, useContext} from 'react'
import MiniCart from './miniCart'
import { Wrapper } from './styles'
import { CartContext } from '../../../Reducer'
import { useNavigate, Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md'



const CartHeader = () => {


const handleMouseOver = (status) => {
  status === 'over' ? setMouseOver(true) : setMouseOver(false)
}
const [isMouseOver, setMouseOver] = useState(false)

const { cart } = useContext(CartContext)

const cartTotally = [...cart]
const result = cartTotally.reduce( ( sum, { productPrice, amount } ) => sum + productPrice*amount , 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Wrapper onMouseOver={() => handleMouseOver('over')} onMouseOut={() => handleMouseOver('out')} >
        <Link to={`/cart`}><span><MdShoppingCart size={'39px'}/></span><span><p className="miniCart">Meu carrinho <br />{result}</p></span></Link>
        {isMouseOver && <MiniCart position="absolute"/>}        
    </Wrapper>
  )
}

export default CartHeader