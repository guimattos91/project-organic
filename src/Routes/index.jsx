import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Cart from '../pages/Carrinho';
import Products from '../pages/Produtos';
import Contact from '../pages/Contato';
import SelectedProducts from '../pages/ProdutoSelecionado';
import FinalizarCompra from '../pages/FinalizarCompra';
import NotFound from '../pages/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<SelectedProducts />} />
            <Route path="/checkout" element={<FinalizarCompra />} />
            <Route path="/*" element={<NotFound />} />
        </Router>
    </BrowserRouter>
);

export default Routes;
