import React, { useContext } from "react"
import { CartContext } from "../../Reducer"
import Button from "../button"
import { Wrapper } from "./styles"
import { Produtos } from "../../products/products"

export const PageCartItems = ({ amount, prodInCartId }) => {
    const { setCart } = useContext(CartContext) //chamando o contexto que permite alterar o CART

    const thisProduct = Produtos.find(prod => prod.id == prodInCartId) //identificando o produto

    const handleRemove = () => {
        setCart({
            type: 'REMOVE',
            payload: {
                productId: prodInCartId,
            }
        })
    }

    return (
        <Wrapper>
            <div className="table">
                <div className="imagem">
                    <img src={thisProduct.image[0]} alt="" />
                </div>
                <div className="produto-info">
                    {thisProduct.name}
                    <ul>
                        <li>Código:{thisProduct.id}</li>
                    </ul>
                </div>
                <div className="preco-produto destaque-preco">
                   {(thisProduct.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
                <div className="quantidade">
                   {amount}
                </div>
                <div className="preco-produto preco-promocional-wrap">
                    {(thisProduct.value * amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
                <div className="excluir">
                    <Button label={'Remover'} onClick={handleRemove} styles={'remover'} />
                </div>
            </div>
        </Wrapper>
    )
}