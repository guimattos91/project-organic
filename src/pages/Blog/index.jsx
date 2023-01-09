import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import H1Pages from '../../components/H1Pages/index';
import MainBlog from '../../components/MainBlog/index';
import bgbackground from '../../assets/backgroundImages/blog.jpg';

const Blog = () => (
    <>
        <Header />
        <H1Pages title="Blog" bgImage={bgbackground} />
        <MainBlog />
        <Footer />
    </>
);

export default Blog;
