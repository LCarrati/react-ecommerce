import React from 'react'
import Main from '../../components/main'
import { useParams } from 'react-router-dom';

const Category = () => {
  const {cat} = useParams()

  return (
    <>
    <Main category={cat}/>
    </>
  )
}

export default Category