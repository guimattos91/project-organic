import styled from 'styled-components';

export const TitleH3 = styled.h3`
    font-family: 'Playfair Display', serif;
    padding-left: 3rem;
`;

export const PriceFont = styled.p`
    color: #666;
    text-align: center;
    font-weight: 700;
    padding-bottom: 2rem;
    padding-top: 1rem;

    :hover {
        color: white;
    }
`;

export const BorderProduct = styled.div`
    border: 1px solid #97ae76;
    margin: 2rem 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;

    i {
        color: #97ae76;
        text-align: center;
        font-size: 36pt;
        padding-top: 2rem;
    }

    :hover {
        background-color: #97ae76;
        margin: 2rem 1rem 2rem 1rem;
        display: flex;
        flex-direction: column;

        i {
            color: white;
            text-align: center;
            font-size: 36pt;
            padding-top: 2rem;
        }
    }
`;
