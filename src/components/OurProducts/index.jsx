import { Col, Container, Row } from 'react-bootstrap';
import Maintitle from '../MainTitle/index';
import ProductsCard from '../ProductsCard/index';
import broccoli from '../../assets/products/isotope-01.jpg';
import lemon from '../../assets/products/isotope-02.jpg';
// import spinachi from '../../assets/products/isotope-03.jpg';
import beans from '../../assets/products/isotope-04.jpg';
import onion from '../../assets/products/isotope-05.jpg';

const OurProducts = () => (
    <section className="py-2">
        <Maintitle title="Our Products" />
        <Container className="d-flex justify-content-center">
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <ProductsCard
                        title="Broccoli"
                        image={broccoli}
                        price="$2.00"
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProductsCard title="Lemon" image={lemon} price="$1.10" />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProductsCard title="Onion" image={onion} price="$2.00" />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProductsCard title="Bean" image={beans} price="$3.20" />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProductsCard title="Onion" image={onion} price="$2.00" />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProductsCard title="Lemon" image={lemon} price="$1.10" />
                </Col>
            </Row>
        </Container>
    </section>
);

export default OurProducts;
