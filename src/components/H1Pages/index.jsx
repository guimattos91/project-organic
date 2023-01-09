import { BannerContainer, TitleH1, WhiteLines } from './styles';

const H1Pages = ({ title, bgImage }) => {
    BannerContainer.defaultProps = {
        theme: {
            image: `${bgImage}`,
        },
    };
    return (
        <BannerContainer className="d-flex justify-content-center py-5">
            <div className="row">
                <div className="col py-4">
                    <TitleH1>{title}</TitleH1>
                    <div className="d-flex justify-content-center">
                        <WhiteLines />
                    </div>
                    <div className="d-flex justify-content-center">
                        <WhiteLines />
                    </div>
                </div>
            </div>
        </BannerContainer>
    );
};

export default H1Pages;
