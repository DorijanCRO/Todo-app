import styled from "styled-components";

export const ButtonB = styled.button `
    background-color: #78290f;
    background-color: ${props => props.color};
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-align: ${props => props.left};
    display: inline-block;
    font-size: 16px;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    opacity: 1;
    &:hover {
        opacity: 0.8;
    }
`;