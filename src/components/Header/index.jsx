import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Logo from '../../assets/Logo/logo.png';
import MenuMobile from '../MenuMobile/index';
import { ListStyleNone, RowStyled } from './styles';

const Header = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <header>
            <Container className="d-none d-lg-flex pt-3">
                <RowStyled>
                    <Col lg={4}>
                        <h1>
                            <Link
                                to="/"
                                className="text-decoration-none px-3 text-reset"
                            >
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="img-fluid"
                                />
                            </Link>
                        </h1>
                    </Col>
                    <Col lg={6}>
                        <nav className="d-flex justify-content-center">
                            <ListStyleNone>
                                <li>
                                    <Link
                                        to="/"
                                        className="text-decoration-none px-3 text-reset"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/shop"
                                        className="text-decoration-none px-3 text-reset"
                                    >
                                        SHOP
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-decoration-none px-3 text-reset"
                                    >
                                        ABOUT
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blog"
                                        className="text-decoration-none px-3 text-reset"
                                    >
                                        BLOG
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-decoration-none px-3 text-reset"
                                    >
                                        CONTACT
                                    </Link>
                                </li>
                            </ListStyleNone>
                        </nav>
                    </Col>
                    <Col lg={2}>
                        <Link
                            to="/cart"
                            className="text-decoration-none text-reset d-flex justify-content-end"
                        >
                            <BsCart3 />
                        </Link>
                    </Col>
                </RowStyled>
            </Container>
            <Container className="d-lg-none pt-3">
                <Row className="d-flex align-items-center justify-content-between">
                    <Col col={8}>
                        <h1 className="me-2">
                            <Link
                                to="/"
                                className="text-decoration-none text-reset"
                            >
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="img-fluid"
                                />
                            </Link>
                        </h1>
                    </Col>
                    <Col>
                        <MenuMobile />
                        <nav className="d-flex justify-content-end align-items-center">
                            <Link
                                to="/cart"
                                className="text-decoration-none px-3 text-reset"
                            >
                                <BsCart3 />
                            </Link>
                            {/* <a
                                className="text-decoration-none text-reset"
                                data-bs-toggle="offcanvas"
                                href="#offcanvasExample"
                                role="button"
                                aria-controls="offcanvasExample"
                            >
                                <AiOutlineMenu />
                            </a> */}
                            <button
                                className="btn border-0 d-flex d-lg-none m-0 p-0"
                                type="button"
                                onClick={() => setMenuIsVisible(true)}
                            >
                                <AiOutlineMenu />
                            </button>
                            <MenuMobile
                                menuIsVisible={menuIsVisible}
                                setMenuIsVisible={setMenuIsVisible}
                            />
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
