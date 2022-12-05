import React from 'react'
import { useParams } from 'react-router-dom';
import CategoriesNav from '../../components/productDetail/categoriesNav';
import DescriptionDetail from '../../components/productDetail/descriptionDetail';
import DetailsDetail from '../../components/productDetail/detailsDetail';
import ImageDetail from '../../components/productDetail/imageDetail';
import { DetailTop, Wrapper } from './styles';
import { Produtos } from '../../products/products';

const ProductDetail = () => {
    const {id} = useParams() //Ao chamar a página de detalhes dos produtos, clicando no CARD do produto por exemplo, é passado o parâmetro ID. Aqui consigo pegar esse ID que foi passado e identificar qual é o produto que foi clicado.
    const thisProduct = Produtos.find(prod => prod.id == id) //Identificando o produto

  return ( // Renderizando a página de detalhes do produto, identificado através do ID.
    <Wrapper>
      <CategoriesNav categoryList={thisProduct.category}/> 
      <DetailTop>
        <ImageDetail mainImg={thisProduct.image}/>
        <DetailsDetail name={thisProduct.name} price={thisProduct.value} id={thisProduct.id}/>
      </DetailTop>
      <DescriptionDetail />
    </Wrapper>
    
  )
}

export default ProductDetail