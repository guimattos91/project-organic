import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import H1Pages from '../../components/H1Pages/index';
import MainAbout from '../../components/MainAbout/index';
import bgbackground from '../../assets/backgroundImages/about.jpg';

const About = () => (
    <>
        <Header />
        <H1Pages title="About Us" bgImage={bgbackground} />
        <MainAbout />

        <Footer />
    </>
);

export default About;
