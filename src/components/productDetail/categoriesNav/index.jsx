import React from 'react'
import { Container, Wrapper } from './styles'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CategoriesNav = ({categoryList}) => {
  const categories = categoryList

  return (
    <Wrapper>
        <Container>
            <div className='homeIcon'><FaHome size={'14px'}/></div>
            <div>
                <ul>
                    <li><Link to={`/`}>Início</Link></li>
                    {categories.map((item,index) => <li key={index}><Link to={`/category/${item}`} state={item}>{item}</Link></li>)} 
                    {/* onClick colocar uma funcao que direciona pra pagina principal com o filtro de categoria, a mesma que vai usar no navlink */}
                </ul>
            </div>
        </Container>
    </Wrapper>
  )
}

export default CategoriesNav