import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import H1Pages from '../../components/H1Pages/index';
import bgbackground from '../../assets/backgroundImages/cart.jpg';

const Cart = () => (
    <>
        <Header />
        <H1Pages title="Shop Cart" bgImage={bgbackground} />
        <Footer />
    </>
);

export default Cart;
