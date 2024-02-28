import { Input } from '../../components/Inputs';
import {
  BodyForm,
  Form,
  HeaderForm,
  LeftContainer,
  LoginForm,
  MainContainer,
  TextArea,
} from './styles';

export const Login = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <TextArea>
          <p>Mais que venda</p>
          <span>Conceito</span>
        </TextArea>
      </LeftContainer>
      <LoginForm>
        <BodyForm>
          <HeaderForm>
            <p>Budega</p>
          </HeaderForm>
          <Form>
            <Input label="Login" placeholder="login" />
          </Form>
        </BodyForm>
      </LoginForm>
    </MainContainer>
  );
};
