import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GreenLines = styled.div`
    height: 2px;
    width: 70px;
    background-color: rgb(151, 174, 118);
    margin-bottom: 5px;
`;
export const ImageBorder = styled.img`
    border: 1px solid #e4e4e4;
`;

export const DivShopSorting = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 2.5rem;
    p {
        margin: 0;
        padding: 0;
    }
`;

export const TableTotal = styled.table`
    color: #333;

    tbody {
        tr {
            th {
                font-family: 'Playfair Display', serif;
                font-weight: 500;
                padding: 1rem 10rem 1rem 2rem;
                border: 1px solid #e4e4e4;
            }
            td {
                padding: 1rem 10rem 1rem 2rem;
                border: 1px solid #e4e4e4;
            }
        }
    }
`;

export const TableCart = styled.table`
    width: 100%;
    color: #333;
    thead {
        background-color: #d2ffea;
        tr {
            th {
                padding: 1rem 2rem;
            }
        }
    }
    tbody {
        tr {
            border: 1px solid #e4e4e4;
            border-style: none solid solid solid;
            td {
                padding: 2rem;
            }
        }
    }
    tfoot {
        tr {
            border: 1px solid #e4e4e4;
            border-style: none solid solid solid;
            td {
                padding: 1rem;
            }
        }
    }
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

export const PageNumbers = styled.div`
    color: rgb(102, 102, 102);
    flex: flex;
    justify-content: space-between;
    p {
        margin: 0;
        padding: 0;
    }
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
    max-width: 95px;
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

export const OptionStyle = styled.select`
    border-style: none;
    background-color: transparent;
`;
