import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AlertProvider } from './components/alertMessage/alertContext'
import { CategoryNameProvider } from './components/header/headerContext'
import { GlobalStyle } from './GlobalStyles/global'
import { ListProvider } from './products/productsContext'
import { CartProvider } from './Reducer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle /> {/*Estilo global aplicado a todos componentes*/}
    <CartProvider> {/*Adicionar, remover e consultar o carrinho disponível para todos os componentes*/}
    <ListProvider> {/*Lista de produtos disponível para ser filtrada por todos os componentes*/}
    <CategoryNameProvider> {/*Disponibiliza o nome da categoria globalmente para renderização condicional*/}
    <AlertProvider> {/*Disponibiliza o alerta de adicionar ao carrinho para todos os componentes*/}
      <App />
    </AlertProvider>
    </CategoryNameProvider>
    </ListProvider>
    </CartProvider>
  </React.StrictMode>
)
