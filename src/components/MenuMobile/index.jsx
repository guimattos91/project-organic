import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { StyledH2, UlFooterStyle, MenuContainer } from './styles';

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);
    return (
        <MenuContainer
            isVisible={menuIsVisible}
            onClick={() => setMenuIsVisible(false)}
        >
            <div>
                <AiOutlineClose
                    size={45}
                    onClick={() => setMenuIsVisible(false)}
                />
                <StyledH2>Menu</StyledH2>
                <div>
                    <nav className="d-flex align-items-center">
                        <UlFooterStyle aria-labelledby="dropdownMenuButton">
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
                        </UlFooterStyle>
                    </nav>
                </div>
            </div>
        </MenuContainer>
    );
};

export default MenuMobile;
