import {
	// BrowserRouter as Router, //GH_PAGES DO NOT SUPPORT IT
	HashRouter as Router,
	Routes,
	Route,
	useLocation
} from 'react-router-dom';
import { useEffect } from 'react';
import ProductDetail from './pages/productDetail'
import PageCart from './pages/cart'
import Header from './components/header';
import Footer from './components/footer';
import Category from './pages/category';
import Main from './components/main';
import NotFound from './pages/404';

const ScrollToTop = (props) => { // peguei esse bloco na documentação do ReactRouter, serve para scroll to top ao mudar a rota.
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>
};

function App() {

	return (
		<div className="App">
			<Router>
				<ScrollToTop> {/*ScrollToTop está fora da rota, será fixo e disponível em todas as páginas*/}
					<Header /> {/*Header está fora da rota, será fixo e disponível em todas as páginas*/}
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/cart/" element={<PageCart />} />
						<Route path="/details/:id" element={<ProductDetail />} /> {/*Esse link recebe o ID do produto para compor a URL*/}
						<Route path="/category/:cat" element={<Category />} /> {/*Esse link recebe a Categoria do produto para compor a URL*/}
						<Route path="/emconstrucao" element={<NotFound />} /> 
					</Routes>
					<Footer /> {/*Footer está fora da rota, será fixo e disponível em todas as páginas*/}
				</ScrollToTop>
			</Router>
		</div>
	)
}

export default App
