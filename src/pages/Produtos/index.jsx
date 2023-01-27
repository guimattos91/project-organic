import { useEffect } from 'react';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import H1Pages from '../../components/H1Pages/index';
import MainShop from '../../components/MainShop/index';
import bgbackground from '../../assets/backgroundImages/shop.jpg';

const Products = () => {
    useEffect(() => {
        document.title = 'Shop | Organic';
    }, []);

    return (
        <>
            <Header />
            <H1Pages title="Shop" bgImage={bgbackground} />
            <MainShop />
            <Footer />
        </>
    );
};

export default Products;
