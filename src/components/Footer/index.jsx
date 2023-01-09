/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/Logo/logo.png';
import {
    UlFooterStyle,
    InputEmail,
    H4Title,
    LiStyle,
    PStyle,
    Buttonmail,
    EmailDiv,
    BgFooterPayment,
    FooterBgColor,
    BorderGray,
} from './styles';

const Footer = () => (
    <>
        <FooterBgColor className="d-none d-md-flex flex-column">
            <Container className="py-5">
                <Row className="row-cols-3 row-cols-lg-5">
                    <Col md={5} lg={3}>
                        <div className="d-flex pb-4">
                            <img src={Logo} alt="Logo" className="img-fluid" />
                        </div>
                        <UlFooterStyle>
                            <LiStyle className="pb-3">
                                <FiMapPin className="me-2" /> 379 5th Ave New
                                York, NYC 10018
                            </LiStyle>
                            <LiStyle className="pb-3">
                                <BiPhone className="me-2" /> (+1) 96 716 6879
                            </LiStyle>
                            <LiStyle className="pb-3">
                                <FiMail className="me-2" />
                                contact@site.com
                            </LiStyle>
                        </UlFooterStyle>
                    </Col>
                    <Col md={3} lg={2}>
                        <H4Title className="pb-3"> SHOP </H4Title>
                        <nav>
                            <UlFooterStyle className="d-flex d-md-block">
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Food
                                    </Link>
                                </LiStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Farm
                                    </Link>
                                </LiStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Health
                                    </Link>
                                </LiStyle>
                                <LiStyle>
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Organic
                                    </Link>
                                </LiStyle>
                            </UlFooterStyle>
                        </nav>
                    </Col>
                    <Col md={3} lg={2}>
                        <H4Title className="pb-3">SUPPORT</H4Title>
                        <nav>
                            <UlFooterStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Contact Us
                                    </Link>
                                </LiStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        FAQ
                                    </Link>
                                </LiStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Privacy Policy
                                    </Link>
                                </LiStyle>
                                <LiStyle>
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Blog
                                    </Link>
                                </LiStyle>
                            </UlFooterStyle>
                        </nav>
                    </Col>
                    <Col md={3} lg={2}>
                        <H4Title className="pb-3 d-flex flex-nowrap">
                            MY ACCOUNT
                        </H4Title>
                        <nav>
                            <UlFooterStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Sign In
                                    </Link>
                                </LiStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        My Cart
                                    </Link>
                                </LiStyle>
                                <LiStyle className="pb-1">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        My Wishlist
                                    </Link>
                                </LiStyle>
                                <LiStyle>
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Check Out
                                    </Link>
                                </LiStyle>
                            </UlFooterStyle>
                        </nav>
                    </Col>
                    <Col md={4} lg={3}>
                        <H4Title className="pb-3">NEWSLETTER</H4Title>
                        <PStyle className="pb-3">
                            Subscribe now to get daily updates
                        </PStyle>
                        <EmailDiv className="d-flex justify-content-between">
                            <InputEmail
                                type="email"
                                id="exampleFormControlInput1"
                                placeholder="Your Email"
                            />
                            <Buttonmail
                                type="submit"
                                className="d-flex justify-content-center"
                            >
                                <FiMail color="white" />
                            </Buttonmail>
                        </EmailDiv>
                    </Col>
                </Row>
            </Container>
            <BgFooterPayment>
                <Container>
                    <Row>
                        <Col className="d-flex">
                            <p className="m-0 p-0">Site criado por:&nbsp;</p>
                            <a
                                href="https://www.linkedin.com/in/guimattos91/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-reset text-white"
                            >
                                Guilherme Mattos
                            </a>
                        </Col>
                    </Row>
                </Container>
            </BgFooterPayment>
        </FooterBgColor>
        <FooterBgColor className="d-md-none">
            <Container className="py-5">
                <Row>
                    <BorderGray className="col-12">
                        <div className="d-flex pb-4">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <UlFooterStyle>
                            <LiStyle className="pb-3">
                                {' '}
                                <FiMapPin className="me-4" /> 379 5th Ave New
                                York, NYC 10018
                            </LiStyle>
                            <LiStyle className="pb-3">
                                <BiPhone className="me-4" /> (+1) 96 716 6879
                            </LiStyle>
                            <LiStyle className="pb-3">
                                <FiMail className="me-4" />
                                contact@site.com
                            </LiStyle>
                        </UlFooterStyle>
                    </BorderGray>
                    <Col className="col-12 pb-4 pt-4">
                        <H4Title> SHOP </H4Title>
                        <nav>
                            <UlFooterStyle className="d-flex">
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Food
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Farm
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Health
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Organic
                                    </Link>
                                </LiStyle>
                            </UlFooterStyle>
                        </nav>
                    </Col>
                    <Col className="col-12 pb-4">
                        <H4Title>SUPPORT</H4Title>
                        <nav>
                            <UlFooterStyle className="d-flex">
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Contact Us
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        FAQ
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Privacy Policy
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Blog
                                    </Link>
                                </LiStyle>
                            </UlFooterStyle>
                        </nav>
                    </Col>
                    <BorderGray className="col-12 pb-4">
                        <H4Title>MY ACCOUNT</H4Title>
                        <nav>
                            <UlFooterStyle className="d-flex">
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Sign In
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        My Cart
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        My Wishlist
                                    </Link>
                                </LiStyle>
                                <LiStyle className="px-2">
                                    <Link
                                        to="#"
                                        className="text-decoration-none text-reset"
                                    >
                                        Check Out
                                    </Link>
                                </LiStyle>
                            </UlFooterStyle>
                        </nav>
                    </BorderGray>
                    <Col className="col-12">
                        <H4Title className="pt-4">NEWSLETTER</H4Title>
                        <PStyle className="pb-3">
                            {' '}
                            Subscribe now to get daily updates{' '}
                        </PStyle>
                        <EmailDiv className="d-flex justify-content-between">
                            <InputEmail
                                type="email"
                                id="exampleFormControlInput1"
                                placeholder="Your Email"
                            />
                            <Buttonmail
                                type="submit"
                                className="d-flex justify-content-center"
                            >
                                <FiMail color="white" />
                            </Buttonmail>
                        </EmailDiv>
                    </Col>
                </Row>
            </Container>
            <BgFooterPayment>
                <Container>
                    <Row>
                        <Col className="d-flex">
                            <p className="m-0 p-0">Site criado por:&nbsp;</p>
                            <a
                                href="https://www.linkedin.com/in/guimattos91/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-reset text-white"
                            >
                                Guilherme Mattos
                            </a>
                        </Col>
                    </Row>
                </Container>
            </BgFooterPayment>
        </FooterBgColor>
    </>
);

export default Footer;
