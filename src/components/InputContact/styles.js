import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const FontPlayfair = styled.h2`
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    text-align: center;
`;

export const InputStyled = styled.input`
    border: 1px solid #888;
    width: 100%;
`;
export const InputStyledPhone = styled(InputMask)`
    border: 1px solid #888;
    width: 100%;
`;

export const ButtonMail = styled.button`
    border-radius: 100px;
    padding: 10px 30px 10px 30px;
    background-color: #829b5e;
    border: none;
    color: #fff;
`;
