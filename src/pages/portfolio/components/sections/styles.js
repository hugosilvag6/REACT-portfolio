import styled from "styled-components";

export const SectionContainer = styled.div`
    background-color: var(--black);
    height: 100vh;
    display: flex;
    align-items: center;
`;
export const SectionContent = styled.div`
    width: var(--safeArea);
    margin: 0 auto;
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