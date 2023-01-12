import styled from 'styled-components';
import BgBackground from '../../assets/fotosabout/bgbanner.jpg';
import ImageAbout01 from '../../assets/fotosabout/01.jpg';
import ImageAbout02 from '../../assets/fotosabout/02.jpg';

export const FontH2 = styled.h2`
    font-family: 'Playfair Display', serif;
    color: rgb(51, 51, 51);
`;

export const FontH2Left = styled.h2`
    font-family: 'Playfair Display', serif;
    color: rgb(51, 51, 51);
    text-align: end;
`;

export const GreenLines = styled.div`
    height: 2px;
    width: 70px;
    background-color: rgb(151, 174, 118);
    margin-bottom: 5px;
`;

export const DivHappyClients = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 0rem 2rem 0rem;

    @media (max-width: 768px) {
        padding: 2rem 0rem 2rem 0rem;
    }
`;
export const DivColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 0rem 2rem 0rem;

    @media (max-width: 768px) {
        padding: 2rem 0rem 2rem 0rem;
    }
`;
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    align-items: center;
    text-align: start;
    padding: 2rem 0rem 2rem 0rem;

    @media (max-width: 768px) {
        padding: 2rem 0rem 2rem 0rem;
    }
`;

export const TextStyledNumber = styled.p`
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 30pt;
`;

export const TextStyled = styled.p`
    font-weight: 500;
    text-align: center;
    margin: 0;
    padding: 0;
`;

export const PStyled = styled.p`
    color: rgb(102, 102, 102);
`;

export const PStyledLeft = styled.p`
    color: rgb(102, 102, 102);
    text-align: end;
`;

export const BannerContainer = styled.div`
    background: rgba(0, 0, 0, 0.7) url(${BgBackground});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    color: white;
    flex: flex;
    justify-content: space-between;
    width: 100vw;
`;
export const ImageContainer01 = styled.div`
    background: url(${ImageAbout01});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    color: white;
    flex: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;
export const ImageContainer02 = styled.div`
    background: url(${ImageAbout02});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    color: white;
    flex: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;
