import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableTotal = styled.table`
    color: #333;
    width: 100%;

    tbody {
        border: 1px solid #e4e4e4;

        tr {
            border: 1px solid #e4e4e4;

            th {
                font-family: 'Playfair Display', serif;
                font-weight: 500;
                padding-left: 1rem;
            }
            td {
                padding: 1rem 1rem 1rem 0;
            }
        }
    }
`;

export const TableCart = styled.table`
    width: 100%;
    color: #333;
    tbody {
        border: 1px solid #e4e4e4;
        tr {
            td {
                padding: 1rem 1rem 1rem 0;
            }
            th {
                padding-left: 1rem;
            }
        }
    }
`;

export const TrStyled = styled.tr`
    width: 100%;
    background-color: #fafafa;
    color: #333;
`;

export const TdStyled = styled.td`
    display: flex;
    justify-content: end;
    text-align: end;
`;

export const LinkTitle = styled(Link)`
    text-decoration: none;
    color: #333;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    :hover {
        color: #97ae76;
    }
`;

export const TitleH3 = styled.h3`
    color: #333;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
`;

export const ButtonCheckout = styled.button`
    border: 1px solid #97ae76;
    border-radius: 50px;
    background-color: #97ae76;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.75rem 2rem;

    :hover {
        background-color: #3a655e;
    }
`;

export const DivNumberInput = styled.div`
    border: 1px solid #97ae76;
    border-radius: 25px;
    width: 95px;
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
        border: transparent;
        border-radius: 25px;
        max-width: 90px;
        height: 40px;
        padding: 0;
        margin: 0;
        padding-left: 1rem;
        :focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
    }
`;

export const ButtonInput = styled.button`
    border: none;
    color: #97ae76;
    background: none;
`;
