import { Link } from 'react-router-dom';
import { DivMenuStyled, StyledH2, UlFooterStyle } from './styles';

const MenuMobile = () => (
    <DivMenuStyled
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
    >
        <div className="offcanvas-header">
            <StyledH2>Menu</StyledH2>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            />
        </div>
        <div className="offcanvas-body">
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
    </DivMenuStyled>
);

export default MenuMobile;
