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