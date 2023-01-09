import styled from 'styled-components';
// import bgbackground from '../../assets/banner/bgbackground.jpg';

export const BannerContainer = styled.div`
    background-image: url(${props => props.theme.image});
    background-color: rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
`;

export const TitleH1 = styled.h1`
    font-family: 'Playfair Display', serif;
    color: white;
    text-align: center;
`;

export const WhiteLines = styled.div`
    height: 1px;
    width: 100px;
    background-color: white;
    margin-bottom: 5px;
    flex: flex;
    align-items: center;
    justify-content: center;
`;
