import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60vh;
    /* &:after {
        content: '';
        position: absolute;
        width: 150vw;
        height: 100%;
        z-index: 2;
        background-color: var(--black);
        transform: rotate(4deg);
        top: 0;
    } */
`;
export const AboutLeftBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
export const AboutUpperBox = styled.div`
    color: var(--silver);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
`;
export const AboutLowerBox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: var(--silver);
        text-transform: uppercase;
        margin: 20px 0;
    }
`;
export const TecBox = styled.ul`
    border: 1px solid var(--red);
    border-radius: 10px;
    color: var(--silver);
    display: flex;
    gap: 10px;
    background-color: rgba(255,255,255,0.1);
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
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
        width: 14%;
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
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: var(--silver);
        text-transform: uppercase;
        margin-bottom: 10px;
    }
`;
export const TableBox = styled.div`
    height: 70%;
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
`;
export const CursosTable = styled.table`
    width: 100%;
    color: var(--silver);
    text-align: center;
    font-size: 13px;
    thead {
        th {
            border: 1px solid var(--red);
            padding: 10px;
            text-transform: uppercase;
            color: var(--red);
            font-weight: 700;
            &:nth-child(1){
                width: 20%;
            }
            &:nth-child(2){
                border-left: none;
                border-right: none;
                width: 60%;
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
                padding: 10px;
                border: 1px solid var(--silver);
                border-top: none;
                a {
                    color: var(--silver);
                    &:hover {
                        font-weight: 700;
                    }
                }
                &:nth-child(1) {
                    width: 20%;
                }
                &:nth-child(2) {
                    border-left: none;
                    border-right: none;
                    width: 60%;
                }
                &:nth-child(3) {
                    white-space: nowrap;
                    width: 20%;
                }
            }
        }
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