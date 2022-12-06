import {
	// BrowserRouter as Router,
	HashRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Home from './pages/home'
import ProductDetail from './pages/productDetail'
import PageCart from './pages/cart'
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
    <Router>
		<Header /> {/*Header está fora da rota, será fixo e disponível em todas as páginas*/}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart/" element={<PageCart />} />
				<Route path="/details/:id" element={<ProductDetail />} /> {/*Esse link recebe o ID do produto para compor a URL*/}
			</Routes>
			<Footer /> {/*Footer está fora da rota, será fixo e disponível em todas as páginas*/}
		</Router>
    </div>
  )
}

export default App
