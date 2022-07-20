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
        img {
            width: 90%;
            padding: 15px;
            background-color: rgba(255,255,255,0.1);
            border: 1px solid var(--silver);
            transition: 300ms;
            &:hover {
                transform: scale(1.05);
            }
        }
        p {
            font-size: 24px;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
            color: var(--red);
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
    border: 1px solid var(--silver);
    cursor: pointer;
    transition: 300ms;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ProjetosControllableBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`;