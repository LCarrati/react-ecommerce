import React from 'react'
import Main from '../../components/main'
import { useParams } from 'react-router-dom';

const Category = () => {
  const {cat} = useParams() //pego a categoria através do react-router usando useParams

  return (
    <>
     <Main category={cat}/> {/* ao clicar em um link de categoria, chamar o componente MAIN passando a categoria como parâmetro */}
    </>
  )
}

export default Category