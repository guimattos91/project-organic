import { PriceFont, BorderProduct } from './styles';

const InformationCard = ({ icon, information }) => (
    <BorderProduct>
        <i className={icon} />
        <PriceFont>{information}</PriceFont>
    </BorderProduct>
);

export default InformationCard;
