import { Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TitleH3, PriceFont, BorderProduct } from './styles';

const ProductsCard = ({ title, image, price }) => (
    <BorderProduct>
        <Link to="/product" className="text-decoration-none text-reset">
            <Ratio
                aspectRatio="1x1"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
                <div />
            </Ratio>
        </Link>
        <Link to="/product" className="text-decoration-none text-reset">
            <TitleH3>{title}</TitleH3>
        </Link>
        <Link to="/product" className="text-decoration-none text-reset">
            <PriceFont>{price}</PriceFont>
        </Link>
    </BorderProduct>
);

export default ProductsCard;
