import styled from 'styled-components';
import BgBackground from '../../assets/banner/bgbackground.jpg';

export const BannerContainer = styled.div`
    background: rgba(0, 0, 0, 0.7) url(${BgBackground});
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
`;

export const FontPlayfair = styled.h2`
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    text-align: center;
`;

export const FontWhite = styled.p`
    color: #fff;
`;

export const ButtonViewMore = styled.button`
    border-radius: 100px;
    padding: 10px 30px 10px 30px;
    background-color: #829b5e;
    border: none;
    color: #fff;
`;
