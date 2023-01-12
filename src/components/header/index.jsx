

import React, { useContext, useState, useEffect } from 'react'
import CartHeader from './cartMenu'
import SearchField from './search'
import UserMenu from './userMenu/index.jsx'
import { Container, NavMenu, RocketMenuStyle } from './styles'
import logo from '../../assets/sLogo.png'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { ListContext, prodList } from '../../products/productsContext'
import { IoRocketOutline, IoPlanetOutline } from 'react-icons/io5'
import { RiRadarLine, RiArrowDownSLine } from 'react-icons/ri'
import { categoryNameContext } from './headerContext'


const RocketMenu = () => {
  // const { setListRender } = useContext(ListContext)

  // const handleSubNav = (categoryA, categoryB) => {
  //   setListRender([...prodList].filter((produto) => ((produto.props.category).includes((categoryA)) && (produto.props.category).includes((categoryB)))))
  // }
  return (
    <RocketMenuStyle>
      <Link to={'/category/Americanos'} state={"Americanos"}><h4>Foguetes Americanos</h4></Link>
      <br />
      <Link to={'/category/Russos'} state={"Russos"}><h4>Foguetes Russos</h4></Link>
      <br />
      <Link to={'/category/Chineses'} state={"Chineses"}><h4>Foguetes Chineses</h4></Link>
      {/* <h4 onClick={() => handleSubNav('Foguetes','Americanos')}>Foguetes Americanos</h4>
      <br />
      <h4 onClick={() => handleSubNav('Foguetes','Russos')}>Foguetes Russos</h4>
      <br />
      <h4 onClick={() => handleSubNav('Foguetes','Chineses')}>Foguetes Chineses</h4> */}
    </RocketMenuStyle>
  )
}

const Header = () => {
  // const navigate = useNavigate();

  const { setListRender } = useContext(ListContext)

  const location = useLocation()
  const cat = location.state
  const { categoryName, setCategoryName } = useContext(categoryNameContext)

  const alteraCategoria = (cat) => {
    setCategoryName(cat)
    console.log('alterei categoria loc ' + cat)
  }
  useEffect(() => {
    alteraCategoria(cat)
  }, [cat])


  const handleChange = (event) => {
    cat !== null ?
      setListRender([...prodList].filter((produto) => ((produto.props.name.toUpperCase()).includes((event.target.value.toUpperCase())) && (produto.props.category).includes((cat))))) : setListRender([...prodList].filter((produto) => ((produto.props.name.toUpperCase()).includes((event.target.value.toUpperCase())))))
  }
  // const handleNav = (category) => {
  //   setListRender([...prodList].filter((produto) => ((produto.props.category).includes((category)))))
  // }
  // const handleSubNav = (categoryA, categoryB) => {
  //   setListRender([...prodList].filter((produto) => ((produto.props.category).includes((categoryA)) && (produto.props.category).includes((categoryB)))))
  // }

  const handleMouseOver = (status) => {
    status === 'over' ? setMouseOver(true) : setMouseOver(false)
  }
  const [isMouseOver, setMouseOver] = useState(false)

  return (
    <>
      <Container>
        <div className="headerLayout">
          <Link to={'/'}><img src={logo} alt="" /></Link>
          {/* onClick={() => setListRender(prodList)} */}
          <SearchField placeholder="Digite o que você procura" onChange={handleChange} />
          <UserMenu />
          <CartHeader />
        </div>
      </Container>
      <NavMenu>
        <div className="horizontal" onMouseOver={() => handleMouseOver('over')} onMouseOut={() => handleMouseOver('out')}>
          <Link to={'/category/Foguetes'} state={"Foguetes"}><div className="menuItem" ><IoRocketOutline size={'27px'} />
            Foguetes
            <RiArrowDownSLine size={'20px'} />
          </div></Link>
          {isMouseOver && <RocketMenu />}
        </div>
        <Link to={'/category/Sondas'} state={"Sondas"}><div className="menuItem"><IoPlanetOutline size={'27px'} />Sondas</div></Link>
        {/* <div className="menuItem" onClick={() => handleNav('Sondas')}><IoPlanetOutline size={'27px'}/>Sondas</div> */}
        <Link to={'/category/Satelites'} state={"Satelites"}><div className="menuItem"><RiRadarLine size={'27px'} />Satélites</div></Link>
        <Link to={'/category/Telescopios'} state={"Telescopios"}><div className="menuItem">Telescópios</div></Link>
      </NavMenu>
    </>
  )
}

export default Header