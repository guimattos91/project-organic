import { useEffect } from 'react';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import H1Pages from '../../components/H1Pages/index';
import bgbackground from '../../assets/backgroundImages/contact.jpg';
import MainContact from '../../components/MainContact';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact | Organic';
    }, []);

    return (
        <>
            <Header />
            <H1Pages title="Contact" bgImage={bgbackground} />
            <MainContact />
            <Footer />
        </>
    );
};

export default Contact;
