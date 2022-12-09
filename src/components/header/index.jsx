

import React, { useContext, useState } from 'react'
import CartHeader from './cartMenu'
import SearchField from './search'
import UserMenu from './userMenu/index.jsx'
import { Container, NavMenu, RocketMenuStyle } from './styles'
import logo from '../../assets/sLogo.png'
import { useNavigate, Link } from 'react-router-dom'
import { ListContext, prodList } from '../../products/productsContext'
import { IoRocketOutline, IoPlanetOutline } from 'react-icons/io5'
import { RiRadarLine, RiArrowDownSLine } from 'react-icons/ri'


const RocketMenu = () => {
  const { setListRender } = useContext(ListContext)
  
  const handleSubNav = (categoryA, categoryB) => {
    setListRender([...prodList].filter((produto) => ((produto.props.category).includes((categoryA)) && (produto.props.category).includes((categoryB)))))
  }
  return (
    <RocketMenuStyle>
      <h4 onClick={() => handleSubNav('Foguetes','Americanos')}>Foguetes Americanos</h4>
      <br />
      <h4 onClick={() => handleSubNav('Foguetes','Russos')}>Foguetes Russos</h4>
      <br />
      <h4 onClick={() => handleSubNav('Foguetes','Chineses')}>Foguetes Chineses</h4>
    </RocketMenuStyle>
  )
}

const Header = () => {
  // const navigate = useNavigate();

  const { setListRender } = useContext(ListContext)

  const handleChange = (event) => {
    setListRender([...prodList].filter((produto) => ((produto.props.name.toUpperCase()).includes((event.target.value.toUpperCase())))))
  }
  const handleNav = (category) => {
    setListRender([...prodList].filter((produto) => ((produto.props.category).includes((category)))))
  }
  const handleSubNav = (categoryA, categoryB) => {
    setListRender([...prodList].filter((produto) => ((produto.props.category).includes((categoryA)) && (produto.props.category).includes((categoryB)))))
  }
  
  const handleMouseOver = (status) => {
    status === 'over' ? setMouseOver(true) : setMouseOver(false)
  }
  const [isMouseOver, setMouseOver] = useState(false)

  return (
    <>
    <Container>
      <div className="headerLayout">
      <Link to={'/'}><img src={logo} alt="" onClick={() => setListRender(prodList)}/></Link>
      <SearchField placeholder="Digite o que você procura" onChange={handleChange}/>
      <UserMenu />
      <CartHeader />  
      </div>    
    </Container>
    <NavMenu>
      <div className="horizontal" onMouseOver={() => handleMouseOver('over')} onMouseOut={() => handleMouseOver('out')}>
        <div className="menuItem" onClick={() => handleNav('Foguetes')} ><IoRocketOutline size={'27px'}/>
          Foguetes
          <RiArrowDownSLine size={'20px'}/>
        </div>
        {isMouseOver && <RocketMenu />}
      </div>
      <div className="menuItem" onClick={() => handleNav('Sondas')}><IoPlanetOutline size={'27px'}/>Sondas</div>
      <div className="menuItem" onClick={() => handleNav('Satélites')}><RiRadarLine size={'27px'}/>Satélites</div>
      <div className="menuItem" onClick={() => handleNav('Telescópios')}>Telescópios</div>
    </NavMenu>
    </>
  )
}

export default Header