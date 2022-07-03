import styled from "styled-components";
import Banner from "../../assets/banner2.jpg"

export const BannerSection = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-image: url(${Banner});
    background-position: 450px 15px;
    background-color: black;
    background-repeat: no-repeat;
    background-size: 80vw;
    img {
        width: 100vw;
    }
`;
export const BannerText = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--safeArea);
    h1 {
        color: var(--silver);
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 200;
        span {
            color: var(--red);
            text-decoration: underline;
            text-decoration-color: var(--silver);
            font-size: 20px;
            font-weight: 400;
        }
    }
    h2 {
        margin: 20px 0;
        color: var(--silver);
        display: flex;
        flex-direction: column;
        position: relative;
        &:before {
            content: "|";
            position: absolute;
            left: -20px;
            top: -6px;
            font-size: 54px;
            font-weight: 200;
        }
        span:first-child {
            text-transform: uppercase;
        }
        span:last-child {
            font-weight: 200;
        }
    }
`;