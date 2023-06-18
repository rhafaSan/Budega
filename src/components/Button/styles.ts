import { styled } from "styled-components";

export const Button = styled.button<{$type?: string}>`
    background: ${ props => props.$type?.includes('primary') ? "#158A8A" : "#FFF"};
    width: 322px;
    height: 44px;
    border-radius: 5px;
    outline: none;
    border: ${ props => props.$type?.includes('primary') ? "none" : " 1px solid #158A8A"};
    color: ${ props => props.$type?.includes('primary') ? "#FFF" : "#099A9A"};
    font-family: Poppins;
    &:hover{
        cursor: pointer;
        background: ${ props => props.$type?.includes('primary') ? "#099A9A" : "#DDD"};
        color: ${ props => props.$type?.includes('primary') ? "#FFF" : "#158A8A"};
    }
`