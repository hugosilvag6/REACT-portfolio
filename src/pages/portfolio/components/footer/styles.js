import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    border-top: 1px solid silver;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    box-sizing: border-box;
    padding: 20px 0;
`;
export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    width: var(--safeAreaResponsive)
`;
export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--silver);
`;