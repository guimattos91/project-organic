import { Col, Container, Row } from 'react-bootstrap';
import CircleBannerHome from '../CircleBannerHome/index';
import VegetableBanner from '../../assets/lettuce.jpg';
import FruitBanner from '../../assets/fruit.jpg';
import MeatBanner from '../../assets/meat.jpg';

const SectionCircleBanner = () => (
    <section>
        <Container>
            <Row className="row-cols-md-3">
                <Col>
                    <CircleBannerHome
                        title="Vegetable"
                        image={VegetableBanner}
                    />
                </Col>
                <Col>
                    <CircleBannerHome title="Fruit" image={FruitBanner} />
                </Col>
                <Col>
                    <CircleBannerHome title="Meat" image={MeatBanner} />
                </Col>
            </Row>
        </Container>
    </section>
);

export default SectionCircleBanner;
