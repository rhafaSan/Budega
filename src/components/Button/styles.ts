import styled from "styled-components";

export const Button = styled.button<{ typeButton: string }>`
  background-color: ${props => props.typeButton == 'primary' ? props.theme.primary.main : props.theme.secondary.main};
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