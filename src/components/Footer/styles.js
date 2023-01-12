import styled from 'styled-components';

export const FooterBgColor = styled.footer`
    background-color: #eaf2f5;
`;

export const UlFooterStyle = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

export const H4Title = styled.h4`
    font-size: 18px;
    font-weight: 400;
    color: #333;
`;

export const LiStyle = styled.li`
    font-size: 14px;
    color: #3f3f3f;
`;

export const PStyle = styled.p`
    font-size: 14px;
    color: #3f3f3f;
`;

export const EmailDiv = styled.div`
    border-radius: 90px;
    padding: 5px 5px 5px 5px;
    background-color: transparent;
    border-color: #dedede;
    border-style: solid;
    border-width: thin;
    flex: flex;
    align-items: center;

    &:hover {
        border-color: #97ae76;
    }
`;

export const Buttonmail = styled.button`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: #829b5e;
    border-style: solid;
    border-color: #829b5e;
    align-items: center;
    justify-content: center;
    flex: flex;
    border: none;
    padding: 0.5rem;
`;

export const InputEmail = styled.input`
    border-style: none;
    background-color: transparent;
    padding: 5px;
    width: 100%;

    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

export const BgFooterPayment = styled.div`
    background-color: rgb(102, 102, 102);
    color: white;
    padding: 1rem 0;
`;

export const BorderGray = styled.div`
    border-bottom: solid;
    border-width: 1px;
    border-color: rgb(204, 204, 204);
`;
