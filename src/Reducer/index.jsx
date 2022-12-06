import React, { createContext, useReducer, useEffect } from 'react'

const cartInitialValue = []; //Carrinho inicial vazio

const cartReducer = (state, action) => { //Função que altera o estado do CART
  let payloadId = action.payload.productId;
  // let payloadName = action.payload.productName;
  let payloadPrice = action.payload.productPrice;
  // let payloadImage = action.payload.productImage;
  let itemExist = [...state].find(item => item.productId == payloadId)
  let itemExistAndAmount = [...state].find(item => item.productId == payloadId && item.amount > 1)

  switch (action.type) {
    case 'ADD':
      if (!itemExist) {
        return [
          ...state, {
            amount: 1,
            // productName: payloadName,
            productId: payloadId,
            productPrice: payloadPrice,
            // productImage: payloadImage
          }
        ]
      }

      if(itemExist) {
        return state.map((item) => item.productId == payloadId
        ? { ...item, amount: Number(item.amount)+1 }
        : item)
      }

    case 'REMOVE': 
      if(itemExistAndAmount){
      return state.map((item) => item.productId == payloadId && (item.amount >= 1)
      ? { ...item, amount: Number(item.amount)-1 }
      : item)}
      if(!itemExistAndAmount){
        const filtrado = state.filter((item) => item.productId != payloadId)
        return filtrado
      }
  }

};
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const initializer = (cartInitialValue) => JSON.parse(localStorage.getItem("localCart")) || cartInitialValue; 
  //Ao acessar o CART a primeira vez, se existir um CART salvo localmente então esse será o valor inicial, caso contrário usar o cartInitialValue que é um array vazio.

  const [cart, setCart] = useReducer(cartReducer, cartInitialValue, initializer); //cartReducer é a função que altera o estado, cartInitialValue é o valor inicial do estado e initializer é a verificação executava antes de definir o estado inicial 

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cart));
  }, [cart]); //sempre que houver alteração no CART, salvar essa alteração localmente

  return (
    <CartContext.Provider value={{ cart, setCart}}> {/*disponibilizar cart e setCart para todos os Childern*/}
      {children}
    </CartContext.Provider>
  );
}