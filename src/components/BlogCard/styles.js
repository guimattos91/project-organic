import styled from 'styled-components';

export const CardBackground = styled.div`
    background-color: #f5f5f5;
    padding: 25px 30px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const TitleH3 = styled.h3`
    font-family: 'Playfair Display', serif;
    color: #333;
    font-size: 18px;
`;

export const DateComment = styled.div`
    & > p {
        color: #999;
    }
`;
export const CardBlog = styled.div`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: ${props => props.direction.column};

    /* @media (max-width: 768px) {
    flex-direction: column;
  } */
    @media (max-width: 768px) {
        flex-direction: ${props => props.direction.row};
        margin-bottom: 1.5rem;
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;