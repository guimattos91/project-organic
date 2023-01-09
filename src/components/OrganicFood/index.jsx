import { Col, Container, Row } from 'react-bootstrap';
import {
    BannerContainer,
    FontPlayfair,
    ButtonViewMore,
    FontWhite,
} from './styles';

const OrganicFood = () => (
    <BannerContainer className="py-5">
        <Container className="container-fluid py-5">
            <Row className="d-flex justify-content-center">
                <Col>
                    <FontWhite className="d-flex justify-content-center">
                        Organic Food
                    </FontWhite>
                    <FontPlayfair className="d-flex justify-content-center pb-2">
                        Healthy - Fresh - Delicious.
                    </FontPlayfair>
                    <div className="d-flex justify-content-center py-4">
                        <ButtonViewMore
                            type="submit"
                            className="d-flex justify-content-center"
                        >
                            VIEW MORE
                        </ButtonViewMore>
                    </div>
                </Col>
            </Row>
        </Container>
    </BannerContainer>
);

export default OrganicFood;
