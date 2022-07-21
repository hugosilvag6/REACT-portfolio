import styled from "styled-components";

export const ProjetosBox = styled.ul`
    display: flex;
    color: var(--silver);
    width: 100%;
    justify-content: space-between;
    min-height: 70vh;
    li {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            font-size: 24px;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
            color: var(--red);
            display: flex;
            justify-content: space-between;
            @media(max-width: 900px) {
                width: var(--safeAreaResponsive);
            }
        }
        span {
            width: 100%;
            margin-top: 20px;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                color: var(--silver);
                text-decoration: none;
                height: 50px;
                padding: 0 20px;
                line-height: 50px;
                font-size: 16px;
                transition: 300ms;
                border: 1px solid var(--silver);
                border-radius: 10px;
                &:hover {
                    background-color: rgba(255,255,255,0.2);
                    transform: scale(1.05);
                }
            }
            @media(max-width: 900px) {
                width: 50%;
            }
        }
        @media(max-width: 900px) {
            width: 100%;
        }
    }
`;

export const ProjetosControl = styled.div`
    color: var(--silver);
    font-weight: 700;
    font-size: 30px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.1);
    border-radius: 5px;
    /* border: 1px solid var(--silver); */
    cursor: pointer;
    transition: 300ms;
    &:hover {
        transform: scale(1.1);
    }
    @media(max-width: 900px) {
        width: 30px;
        height: 30px;
        font-size: 20px;
    }
`;

export const ProjetosControllableBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    @media(max-width: 900px) {
        gap: 0;
        justify-content: space-between;
    }
`;

export const GithubLogo = styled.img`
    width: 20px;
`;

export const ProjectImage = styled.img`
    width: 90%;
    padding: 15px;
    background-color: rgba(255,255,255,0.1);
    border: 1px solid var(--silver);
    border-radius: 10px;
    transition: 300ms;
    &:hover {
        transform: scale(1.05);
    }
    @media(max-width: 900px) {
        width: var(--safeArea);
    }
`;