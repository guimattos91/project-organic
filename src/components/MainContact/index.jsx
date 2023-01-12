import { Col, Container, Row } from 'react-bootstrap';

import InformationCard from '../InformationCard';
import InputContact from '../InputContact';
import { IframeMap } from './styles';

const MainContact = () => (
    <main>
        <Container>
            <Row className="pt-4">
                <Col xs={12} md={4} className="pb-4">
                    <InformationCard
                        icon="fa fa-map-marker"
                        information="12/2th Quincy St, NYC 12018"
                    />
                </Col>
                <Col xs={12} md={4} className="pb-4">
                    <InformationCard
                        icon="fa fa-mobile"
                        information="(+1) 11 321 4567"
                    />
                </Col>
                <Col xs={12} md={4} className="pb-4">
                    <InformationCard
                        icon="fa fa-envelope-o"
                        information="contact@site.com"
                    />
                </Col>
            </Row>
            <Row className="pt-4">
                <Col>
                    <IframeMap
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4713259679847!2d-73.96303388426293!3d40.685616179334765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bbd9069a5d5%3A0x35d423f7f989154c!2s12%20Quincy%20St%2C%20Brooklyn%2C%20NY%2011238%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1673238981564!5m2!1spt-BR!2sbr"
                        allowFullScreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </Col>
            </Row>
            <InputContact />
        </Container>
    </main>
);

export default MainContact;
