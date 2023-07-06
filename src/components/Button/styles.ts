import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary.main};
  color: ${(props) => props.theme.common.white};
  border: none;
  border-radius: 4px;
  width: 250px;
  height: 46px;
  &:hover{
    background-color: ${(props) => props.theme.secondary.main};
    cursor: pointer;
  }
`;