import { useEffect } from 'react';
import HeaderBanner from '../../components/HeaderBanner/index';
import Footer from '../../components/Footer/index';
import MainHome from '../../components/MainHome/index';

const Home = () => {
    useEffect(() => {
        document.title = 'Organic';
    }, []);

    return (
        <>
            <HeaderBanner />
            <MainHome />
            <Footer />
        </>
    );
};

export default Home;
