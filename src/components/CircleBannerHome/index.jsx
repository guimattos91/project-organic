import { CircleBanner, FontH2, FontH3 } from './styles';

const CircleBannerHome = ({ title, titleH3, image, description }) => (
    <div className="pt-5 d-flex flex-column align-items-center">
        <CircleBanner src={image} alt={title} />
        <FontH2 className="pt-4">{title}</FontH2>
        <FontH3 className="pt-2">{titleH3}</FontH3>
        <p className="fs-6 fw-light">{description}</p>
    </div>
);

export default CircleBannerHome;
