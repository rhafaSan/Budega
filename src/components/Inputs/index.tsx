import * as Styled from './styles';

interface InputProps {
  label: string;
  placeholder: string;
}

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <Styled.InputContainer>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input placeholder={placeholder} />
    </Styled.InputContainer>
  );
};
