import React, {useState, useContext} from 'react'
import MiniCart from './miniCart'
import { Wrapper } from './styles'
import { CartContext } from '../../../Reducer'
import { useNavigate, Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md'

import { AlertContext } from '../../alertMessage/alertContext';
import AlertMessage from '../../alertMessage';




const CartHeader = () => {
  const { alert, setAlert } = useContext(AlertContext)
  // const alerta = () => {
  //   setAlert(true)
  //   console.log(alert)
  //   setTimeout(() => {
  //     tiraAlert()
  //   }, 60000);
  //   console.log(alert)
  // }
  // const tiraAlert = () => {
  //   setAlert(false)
  // }

const handleMouseOver = (status) => {
  status === 'over' ? setMouseOver(true) : setMouseOver(false);
}
const [isMouseOver, setMouseOver] = useState(false)

const { cart } = useContext(CartContext)

const cartTotally = [...cart]
const result = cartTotally.reduce( ( sum, { productPrice, amount } ) => sum + productPrice*amount , 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const quantidade = cartTotally.reduce( (sum, { amount } ) => sum + amount,0)

  return (
    <Wrapper onMouseOver={() => handleMouseOver('over')} onMouseOut={() => handleMouseOver('out')} >
        <Link to={`/cart`}>
          <span>
          <div className='miniCartWrapper'>
            <MdShoppingCart size={'39px'}/>
            <div className='cartNumber'>{quantidade}</div>
          </div>
          </span>
          <span>
            <p className="miniCart">Meu carrinho <br />{result}</p>
          </span>
        </Link>
        {isMouseOver && <MiniCart position="absolute"/>}   
        {alert && <AlertMessage position="fixed" top="0" left="25"/>}     
    </Wrapper>
  )
}

export default CartHeader