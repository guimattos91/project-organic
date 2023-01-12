import { Link } from 'react-router-dom';
import { CardBackground, TitleH2, CardImage, PStyled } from './styles';

const ShopCard = ({ image, title, description }) => (
    <div className="py-4">
        <div>
            <Link to="/product" className="text-decoration-none text-reset">
                <CardImage src={image} alt={title} />
            </Link>
        </div>
        <CardBackground>
            <div className="pt-2">
                <Link to="/product" className="text-decoration-none text-reset">
                    <TitleH2>{title}</TitleH2>
                </Link>
            </div>
            <Link to="/product" className="text-decoration-none text-reset">
                <PStyled>{description}</PStyled>
            </Link>
        </CardBackground>
    </div>
);

export default ShopCard;
