import { Ratio } from 'react-bootstrap';
import { TitleH3, PriceFont, BorderProduct } from './styles';

const ProductsCard = ({ title, image, price }) => (
    <BorderProduct>
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
        <TitleH3>{title}</TitleH3>
        <PriceFont>{price}</PriceFont>
    </BorderProduct>
);

export default ProductsCard;
