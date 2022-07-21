import styled from "styled-components";

export const Header = styled.header`
    /* position: fixed;
    left: 0px;
    top: 0px; */
    position: absolute;
    z-index: 100;
    width: 100%;
    border-bottom: 1px solid silver;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: var(--safeArea);
    align-items: center;
    @media(max-width: 900px) {
        justify-content: center;
    }
`;
export const LogoNav = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    h1 {
        color: var(--silver);
        text-transform: uppercase;
    }
    nav {
        display: flex;
        gap: 30px;
        a {
            color: var(--silver);
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 400;
            transition: 300ms;
            &:hover {
                color: var(--red);
            }
        }
    }
`;