import { Col, Row } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { ButtonMail } from './styles';

const InputContact = () => (
    <Row className="py-3">
        <Col xs={12} className="py-2">
            <textarea
                className="form-control"
                id="textmessage"
                rows="6"
                placeholder="Your Message"
            />
        </Col>
        <Col xs={12} md={6} className="py-2">
            <input
                type="text"
                className="form-control py-2"
                id="name"
                placeholder="Your Name"
            />
        </Col>
        <Col xs={12} md={6} className="py-2">
            <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="Your E-mail"
            />
        </Col>
        <Col xs={12} className="py-3">
            <InputMask
                type="text"
                className="form-control py-2"
                id="phone"
                placeholder="Phone Number"
                mask="(99)99999-9999"
            />
        </Col>
        <Col xs={12} className="py-2">
            <ButtonMail type="submit" className="d-flex justify-content-center">
                SEND MAIL
            </ButtonMail>
        </Col>
    </Row>
);

export default InputContact;
