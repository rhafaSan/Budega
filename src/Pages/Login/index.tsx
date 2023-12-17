import { BodyForm, Form, HeaderForm, LeftContainer, LoginForm, MainContainer, TextArea } from "./styles"

export const Login = () => {
    return(
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
                    <Form >
                        <input />
                        <input />
                    </Form>
                </BodyForm>
            </LoginForm>
        </MainContainer>
    )

}