import React, { useEffect, useState, useContext } from 'react'
import { Wrapper, ProductsWrapper, ProductsMenuWrapper } from './styles'
import { ListContext, prodList } from '../../products/productsContext'
import Carrossel from '../carrossel'

const Main = () => {

  const { listRender, setListRender } = useContext(ListContext) //Chamando o contexto que carrega a lista de CARDs
  const [minMax, setMinMax] = useState([0, 0]) //Estado para filtrar a lista por preço

  const handleOrderChange = (event) => { //Ordenando a lista por preço
    event.target.value === 'Crescente' ? setListRender([...listRender].sort((a, b) => (a.props.price - b.props.price))) : setListRender([...listRender].sort((a, b) => (b.props.price - a.props.price)))
  }


  const handlePriceMin = (event) => { //Input controlado 
    let min = event.target.value !== '' ? event.target.value : 0 //verifico se existe algum valor digitado no input, se não houver valor será 0
    setMinMax(minMax.map((item, index) => index === 0 ? Number(min) : item)) //Altero o estado que filtra por preço, apenas no índice 0 do array que representa o valor mínimo, para receber o valor do input. O valor do indice 1 permanece inalterado.
  }

  const handlePriceMax = (event) => { //Input controlado 
    let max = event.target.value !== '' ? event.target.value : 0 //verifico se existe algum valor digitado no input, se não houver valor será 0
    setMinMax(minMax.map((item, index) => index === 1 ? Number(max) : item)) //Altero o estado que filtra por preço, apenas no índice 1 do array que representa o valor máximo, para receber o valor do input. O valor do indice 0 permanece inalterado.
  }

  useEffect(() => {
    if (minMax[0] > 0 && minMax[1] > 0) { //Se o valores de min e max forem diferentes de 0, filtrar a lista de CARDs pelo valor máx e mín
      setListRender([...prodList].filter((produto) => ((produto.props.price > minMax[0]) && (produto.props.price < minMax[1]))
      ))
    }
    if (minMax[0] == 0) { //Se o valor de min for 0, filtrar a lista de CARDs pelo valor máx
      setListRender([...prodList].filter((produto) => ((produto.props.price) < minMax[1])
      ))
    }
    if (minMax[1] == 0) { //Se o valor de max for 0, filtrar a lista de CARDs pelo valor mín
      setListRender([...prodList].filter((produto) => ((produto.props.price) > minMax[0])
      ))
    }
  }, [minMax]) //sempre que o estado minMax for alterado


  return (<>
    <Wrapper>
      <Carrossel />
      <ProductsMenuWrapper>
        <p>Quantidade de produtos: {listRender.length}</p>
        <p>Valor mínimo:
          <input onChange={handlePriceMin}></input>
          Valor máximo:
          <input onChange={handlePriceMax}></input>
        </p>
        <p>Ordenar:
          <select onChange={handleOrderChange}>
            <option value="Decrescente">Decrescente</option>
            <option value="Crescente">Crescente</option>
          </select>
        </p>
      </ProductsMenuWrapper>
      <ProductsWrapper>
        {listRender}
      </ProductsWrapper>
    </Wrapper></>
  )
}

export default Main