import { Produtos } from './products'
import ProductCard from '../components/productCard'
import { createContext, useState } from 'react'

export const prodList = Produtos.map((produto) => <ProductCard id={produto.id} name={produto.name} image={produto.image} price={produto.value} discount={produto.discount} key={produto.id} />) //Lista de todos os produtos

export const ListContext = createContext()

export const ListProvider = ({ children }) => {
   const [listRender, setListRender] = useState(prodList) // Criando um estado com os cards de produtos renderizados na tela

   return (
      <ListContext.Provider value={{ listRender, setListRender }}>{/*Disponibilizando o estado da lista de produtos para ser lido/modificado pelos demais componentes*/}
         {children}
      </ListContext.Provider>
   )
}