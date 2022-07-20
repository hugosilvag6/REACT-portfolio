import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    border-top: 1px solid silver;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
`;
export const FooterContainer = styled.div`
    display: flex;
    width: var(--safeArea);
    align-items: center;
`;
export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--silver);
`;