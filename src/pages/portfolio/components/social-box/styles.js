import styled from "styled-components";

export const SocialBoxContainer = styled.div`
    display: flex;
    gap: 10px;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: rgba(255, 255, 255, 0.2); */
        width: 30px;
        height: 30px;
        border-radius: 5px;
        transition: 300ms;
        img {
            width: 25px;
        }
        &:hover {
            transform: scale(1.3);
        }
    }
`