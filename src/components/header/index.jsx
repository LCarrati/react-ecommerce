

import React, { useContext, useState } from 'react'
import CartHeader from './cartMenu'
import SearchField from './search'
import UserMenu from './userMenu/index.jsx'
import { Container, NavMenu, RocketMenuStyle } from './styles'
import logo from '../../assets/sLogo.png'
import { useNavigate } from 'react-router-dom'
import { ListContext, prodList } from '../../products/productsContext'
import { IoRocketOutline, IoPlanetOutline } from 'react-icons/io5'
import { RiRadarLine, RiArrowDownSLine } from 'react-icons/ri'

const RocketMenu = () => {
  return (
    <RocketMenuStyle>
      <h4>Foguetes Americanos</h4>
      <br />
      <h4>Foguetes Russos</h4>
      <br />
      <h4>Foguetes Chineses</h4>
    </RocketMenuStyle>
  )
}

const Header = () => {
  const navigate = useNavigate();

  const { setListRender } = useContext(ListContext)

  const handleChange = (event) => {
    setListRender([...prodList].filter((produto) => ((produto.props.name.toUpperCase()).includes((event.target.value.toUpperCase())))))
  }

  const handleMouseOver = (status) => {
    status === 'over' ? setMouseOver(true) : setMouseOver(false)
  }
  const [isMouseOver, setMouseOver] = useState(false)

  return (
    <>
    <Container>
      <div className="headerLayout">
      <img src={logo} alt="" onClick={() => navigate("/")}/>
      <SearchField placeholder="Digite o que você procura" onChange={handleChange}/>
      <UserMenu />
      <CartHeader />  
      </div>    
    </Container>
    <NavMenu>
      <div className="horizontal" onMouseOver={() => handleMouseOver('over')} onMouseOut={() => handleMouseOver('out')}>
        <div className="menuItem" ><IoRocketOutline size={'27px'}/>
          Foguetes
          <RiArrowDownSLine size={'20px'}/>
        </div>
        {isMouseOver && <RocketMenu />}
      </div>
      <div className="menuItem"><IoPlanetOutline size={'27px'}/>Sondas</div>
      <div className="menuItem"><RiRadarLine size={'27px'}/>Satélites</div>
      <div className="menuItem">Telescópios</div>
    </NavMenu>
    </>
  )
}

export default Header