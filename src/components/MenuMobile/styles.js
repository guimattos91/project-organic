import styled, { css } from 'styled-components';

export const UlFooterStyle = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
`;
export const DivMenuStyled = styled.div`
    max-width: 280px;
`;
export const StyledH2 = styled.h2`
    font-family: 'Playfair Display', serif;
`;

export const DivMenu = styled.div`
    background-color: #252b42;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0%;
`;

export const ListStyleNone = styled.ul`
    list-style: none;
    flex: flex;
`;

export const BannerTitle = styled.h2`
    font-weight: 900;
    text-align: center;
    flex-wrap: wrap;
    font-size: 36px;
`;

export const HeaderStyles = styled.header`
    color: #fff;
`;

export const MenuContainer = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    color: white;
    background: transparent;
    opacity: 0;
    pointer-events: none;
    transform: translatex(-50px);
    transition: 0.5s;

    div {
        background: #829b5e;
        width: 280px;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        > svg {
            position: relative;
            margin-top: 1rem;
            margin-right: 1rem;
            flex: flex;
            align-self: flex-end;
            transform: rotate(45deg);
            transition: 0.7s;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 2rem;
        transform: scale(0.7);
        transition: 0.7s;
    }

    h2 {
        padding-top: 3rem;
        transform: scale(0.7);
        transition: 0.7s;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 30px;
    }

    ${({ isVisible }) =>
        isVisible &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0px);
            div {
                > svg {
                    transform: rotate(0deg);
                }
            }
        `}
`;
