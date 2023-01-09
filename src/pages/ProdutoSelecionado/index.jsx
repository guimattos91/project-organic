import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import H1Pages from '../../components/H1Pages/index';
import MainShopDetail from '../../components/MainShopDetail/index';
import bgbackground from '../../assets/banner/bgbackground.jpg';

const SelectedProducts = () => (
    <>
        <Header />
        <H1Pages title="Shop Detail" bgImage={bgbackground} />
        <MainShopDetail />
        <Footer />
    </>
);

export default SelectedProducts;
