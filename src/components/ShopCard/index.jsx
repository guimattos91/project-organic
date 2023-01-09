import { CardBackground, TitleH2, CardImage, PStyled } from './styles';

const ShopCard = ({ image, title, description }) => (
    <div className="py-4">
        <div>
            <CardImage src={image} alt={title} />
        </div>
        <CardBackground className="d-flex flex-column justify-content-center align-items-center">
            <div className="pt-2">
                <TitleH2>{title}</TitleH2>
            </div>
            <PStyled>{description}</PStyled>
        </CardBackground>
    </div>
);

export default ShopCard;
