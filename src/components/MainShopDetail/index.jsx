import { Link } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import { Col, Container, Row } from 'react-bootstrap';
import { FontH2, DivInfo, ButtonAddToCart, ButtonHeart } from './styles';
import ShopCard from '../ShopCard/index';
import Salad from '../../assets/shopproduct/01.jpg';
import Onion from '../../assets/shopproduct/02.jpg';
import Bean from '../../assets/shopproduct/03.jpg';
import Lemon from '../../assets/shopproduct/04.jpg';

const MainShopDetail = () => (
    <main>
        <Container>
            <Row className="pt-5">
                <Col xs={12} md={6}>
                    <img src={Salad} alt="salad" className="img-fluid" />
                </Col>
                <Col xs={12} md={6}>
                    <FontH2>Salad</FontH2>
                    <p className="pt-3 pb-2">$2.00</p>
                    <DivInfo>
                        <p className="pt-3 pb-2">
                            Duis vestibulum ante velit. Pellentesque orci felis,
                            pharetra ut pharetra ut, interdum at mauris. Aenean
                            efficitur aliquet libero sit amet scelerisque.
                            Suspendisse efficitur mollis eleifend. Aliquam
                            tortor nibh, venenatis quis sem dapibus, varius
                            egestas lorem a sollicitudin.
                        </p>
                        <div className="d-flex justify-content-between">
                            <ButtonAddToCart className="mb-4">
                                ADD TO CART
                            </ButtonAddToCart>
                            <ButtonHeart className="mb-4">
                                {' '}
                                <BsFillHeartFill />{' '}
                            </ButtonHeart>
                        </div>
                    </DivInfo>
                    <div>
                        <p>
                            Categories:
                            <Link
                                to="/produtos"
                                className="text-decoration-none px-3 text-reset"
                                color="#97ae76"
                            >
                                Food
                            </Link>
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className=" pt-3">
                <Col xs={12} sm={6} md={3}>
                    <ShopCard title="Salad" description="$3.20" image={Salad} />
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <ShopCard title="Onion" description="$3.20" image={Onion} />
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <ShopCard title="Bean" description="$3.50" image={Bean} />
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <ShopCard title="Lemon" description="$1.08" image={Lemon} />
                </Col>
            </Row>
        </Container>
    </main>
);

export default MainShopDetail;
