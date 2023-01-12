import styled from 'styled-components';

export const GreenLines = styled.div`
    height: 2px;
    width: 70px;
    background-color: rgb(151, 174, 118);
    margin-bottom: 5px;
`;

export const DivShopSorting = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    p {
        margin: 0;
        padding: 0;
    }
`;

export const PStyled = styled.p`
    color: rgb(102, 102, 102);
`;

export const PageNumbers = styled.div`
    color: rgb(102, 102, 102);
    flex: flex;
    justify-content: end;
    p {
        margin: 0;
        padding: 0;
    }
`;

export const OptionStyle = styled.select`
    border-style: none;
    background-color: transparent;
    border: 1px solid #e4e4e4;
`;
