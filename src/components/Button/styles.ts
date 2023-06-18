import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.color.secundary.main};
  background-color: ${(props) => props.theme.color};

  border: ${(props) => props.theme.border.style};
  border-radius: ${(props) => props.theme.border.radius};

  font-size: ${(props) => props.theme.font.big};
`;