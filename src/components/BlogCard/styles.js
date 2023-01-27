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
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
        color: #999;
        margin: 0;
        padding: 0;
    }
`;

export const DateCommentIntern = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
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
    @media (max-width: 991px) {
        flex-direction: ${props => props.direction.row};
        margin-bottom: 1.5rem;
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
