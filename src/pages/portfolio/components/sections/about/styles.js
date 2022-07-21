import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 60vh;
    @media(max-width: 900px) {
        flex-direction: column;
        height: auto;
    }
`;
export const AboutLeftBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media(max-width: 900px) {
        width: 100%;
    }
`;
export const AboutUpperBox = styled.div`
    color: var(--silver);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    text-align: justify;
`;
export const AboutLowerBox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    h2 {
        color: var(--silver);
        text-transform: uppercase;
        margin: 20px 0;
    }
`;
export const TecBox = styled.ul`
    border-radius: 10px;
    color: var(--silver);
    display: flex;
    gap: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: center;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        border: 1px solid var(--silver);
        border-radius: 10px;
        gap: 5px;
        transition: 300ms;
        padding: 5px;
        width: 20%;
        &:hover {
            transform: scale(1.1);
            border: 1px solid var(--red);
        }
        img {
            width: 40px;
        }
        p {
            font-size: 13px;
        }
    }
`;
export const AboutRightBox = styled.div`
    width: 58%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 60vh;
    h2 {
        color: var(--silver);
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    @media(max-width: 900px) {
        width: 100%;
    }
`;
export const TableBox = styled.div`
    height: 70%;
    width: 100%;
    overflow: auto;
    @media(max-width: 900px) {
        max-height: 60vh;
    }
`;
export const CursosTable = styled.table`
    width: 100%;
    color: var(--silver);
    text-align: center;
    font-size: 13px;
    table-layout: fixed;
    thead {
        th {
            border: 1px solid var(--red);
            padding: 10px 5px;
            text-transform: uppercase;
            color: var(--red);
            font-weight: 700;
            &:nth-child(1){
                width: 29%;
            }
            &:nth-child(2){
                border-left: none;
                border-right: none;
                width: 48%;
            }
            &:nth-child(3){
                width: 20%;
            }
        }
    }
    tbody {
        tr {
            td {
                box-sizing: border-box;
                padding: 10px 5px;
                border: 1px solid var(--silver);
                border-top: none;
                a {
                    color: var(--silver);
                    &:hover {
                        font-weight: 700;
                    }
                }
                &:nth-child(2) {
                    border-left: none;
                    border-right: none;
                }
            }
        }
    }
    @media(max-width: 900px) {
        font-size: 12px;
    }
`;
export const CursosVerMais = styled.div`
    box-sizing: border-box;
    width: 150px;
    display: flex;
    border: 1px solid var(--silver);
    color: var(--silver);
    padding: 20px;
    text-transform: uppercase;
    text-decoration: none;
    justify-content: center;
    cursor: pointer;
    transition: 500ms;
    margin: 20px 0;
    &:hover {
        transform: scale(1.1);
        border: 1px solid var(--red);
        color: var(--red);
    }
`;