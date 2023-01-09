import styled from 'styled-components';

export const GreenLines = styled.div`
    height: 2px;
    width: 70px;
    background-color: rgb(151, 174, 118);
    margin-bottom: 5px;
`;

export const FontH2 = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 36px;
`;

export const DivInfo = styled.div`
    border-top: solid;
    border-bottom: solid;
    border-color: rgb(102, 102, 102);
    border-width: 1px;
`;

export const PageNumbers = styled.div`
    color: rgb(102, 102, 102);
    flex: flex;
    justify-content: end;
`;

export const OptionStyle = styled.select`
    border-style: none;
`;

export const ButtonAddToCart = styled.button`
    padding: 10px 30px 10px 30px;
    background-color: #97ae76;
    border: solid;
    border-color: #97ae76;
    color: #fff;
    color: white;
    flex: flex;
    justify-content: center;

    &:hover {
        background-color: #829b5e;
        border-color: #829b5e;
    }
`;

export const ButtonHeart = styled.button`
    padding: 10px 30px 10px 30px;
    background-color: white;
    border: solid;
    border-color: #97ae76;
    color: #fff;
    color: white;
    flex: flex;
    justify-content: center;
    color: #97ae76;

    &:hover {
        background-color: #829b5e;
        color: white;
        border-color: #829b5e;
    }
`;
