import { useState } from 'react';
import styled from 'styled-components';

export const AccContent = styled.div`
    width: 100%;
    max-height: ${(props) => props.open ? '20vh' : '0'};
    opacity: ${(props) => props.open ? '1' : '0'};
    padding: ${(props) => props.open ? '10px 20px 0 20px' : '0 20px'};
    transition: all ease-in-out 500ms;
    box-sizing: border-box;
    overflow: hidden;
`
export const AccButton = styled.button`
    font-size: 20px;
    color: ${(props) => props.open ? 'var(--red)' : 'var(--silver)'};
    width: 100%;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--silver);
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    &:after {
        content: ${(props) => props.open ? "'\\2212'" : "'\\002B'"};
        color: ${(props) => props.open ? 'var(--red)' : 'var(--silver)'};
        font-size: 25px;
    }
`;

export const ProjetosAccordions = ({label, description}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <AccButton open={open} onClick={handleClick}>{label}</AccButton>
            <AccContent open={open}>{description}</AccContent>
        </>
    )
}