import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Col, Container, Row } from 'react-bootstrap';
import { PageNumbers, OptionStyle, DivShopSorting } from './styles';
import ShopCard from '../ShopCard/index';
import Salad from '../../assets/shopproduct/01.jpg';
import Onion from '../../assets/shopproduct/02.jpg';
import Bean from '../../assets/shopproduct/03.jpg';
import Lemon from '../../assets/shopproduct/04.jpg';
import Spinach from '../../assets/shopproduct/05.jpg';
import Apple from '../../assets/shopproduct/06.jpg';
import Broccoli from '../../assets/shopproduct/07.jpg';
import Basil from '../../assets/shopproduct/08.jpg';
import Pear from '../../assets/shopproduct/09.jpg';
import Tomato from '../../assets/shopproduct/010.jpg';
import Bittermelon from '../../assets/shopproduct/011.jpg';
import Cucumber from '../../assets/shopproduct/012.jpg';

const MainShop = () => (
    <main>
        <DivShopSorting className="py-4">
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} sm={6} className="text-center text-sm-start">
                        <p>Showing 1 - 12 of 30 results</p>
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        className="d-flex justify-content-center justify-content-sm-end pt-3 p-sm-0"
                    >
                        <OptionStyle name="Sorting" id="shop" form="formshop">
                            <option value="menu_order" selected="selected">
                                Default sorting
                            </option>
                            <option value="popularity">
                                Sort by popularity
                            </option>
                            <option value="rating">
                                Sort by average rating
                            </option>
                            <option value="date">Sort by newness</option>
                            <option value="pricelowhigh">
                                Sort by price: low to high
                            </option>
                            <option value="pricehighlow">
                                Sort by price: high to low
                            </option>
                        </OptionStyle>
                    </Col>
                </Row>
            </Container>
        </DivShopSorting>
        <Container>
            <Row className="pt-3">
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Salad" description="$3.20" image={Salad} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Onion" description="$3.20" image={Onion} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Bean" description="$3.50" image={Bean} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Lemon" description="$1.08" image={Lemon} />
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard
                        title="Spinach"
                        description="$2.26"
                        image={Spinach}
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Apple" description="$4.05" image={Apple} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard
                        title="Broccoli"
                        description="$3.88"
                        image={Broccoli}
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Basil" description="$1.55" image={Basil} />
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard title="Pear" description="$4.80" image={Pear} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard
                        title="Tomato"
                        description="$2.32"
                        image={Tomato}
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard
                        title="Bittermelon"
                        description="$5.20"
                        image={Bittermelon}
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <ShopCard
                        title="Cucumber"
                        description="$3.45"
                        image={Cucumber}
                    />
                </Col>
            </Row>
            <PageNumbers className="d-flex align-items-center py-5">
                <MdOutlineKeyboardArrowLeft />
                <p className="px-3">1 </p>
                <p className="px-3">2 </p>
                <p className="px-3">3 </p>
                <MdOutlineKeyboardArrowRight />
            </PageNumbers>
        </Container>
    </main>
);

export default MainShop;
