import { styled } from "styled-components";

export const Button = styled.button<{ $type?: string }>`
  outline: none;
  color: ${(props) => (props.$type?.includes("primary") ? "#FFF" : "#099A9A")};
  font-family: Poppins;
`;

export const ButotnDiv = styled.div<{ $type?: string }>`
  width: 322px;
  height: 44px;
  border-radius: 5px;
  background: ${(props) =>
    props.$type?.includes("primary") ? "#158A8A" : "#FFF"};
  border: ${(props) =>
    props.$type?.includes("primary") ? "none" : " 1px solid #158A8A"};
  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.$type?.includes("primary") ? "#099A9A" : "#DDD"};
    color: ${(props) =>
      props.$type?.includes("primary") ? "#FFF" : "#158A8A"};
  }
`;
