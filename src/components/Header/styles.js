import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const ListStyleNone = styled.ul`
    list-style: none;
    text-decoration: none;
    display: flex;
    font-weight: 700;
    align-items: center;
    margin: 0;
    color: #666;
`;

export const Cart = styled.div`
    list-style: none;
    text-decoration: none;
`;
export const RowStyled = styled(Row)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
