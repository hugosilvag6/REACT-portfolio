import styled from "styled-components";

export const SectionContainer = styled.div`
    background-color: var(--black);
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
`;
export const SectionContent = styled.div`
    width: var(--safeArea);
    margin: 0 auto;
    position: relative;
    @media(max-width: 900px) {
        width: var(--safeAreaResponsive);
    }
`;
export const SectionTitle = styled.h1`
    color: var(--silver);
    text-transform: uppercase;
    width: max-content;
    margin: 30px 0;
    font-size: 40px;
    &:after {
        content: "";
        display: block;
        width: 40%;
        height: 4px;
        background-color: var(--red);
    }
`;