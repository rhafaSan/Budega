import styled from "styled-components";
import background_image from '../../assets/imgs/background-login.png'

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background_image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`

export const TextArea = styled.div`
text-align: center;
align-items: center;
p{
    font-size: 46px;
    font-weight: 400;
    font-family: 'Poppins';
    line-height: 70px;
}

span{
    font-size: 46px;
    font-weight: 300;
    font-family: 'Poppins';
    line-height: 64px;
    letter-spacing: 20px;
}
`

export const LeftContainer = styled.div`
    color: white;
    margin: auto;
`

export const LoginForm = styled.div`
    align-items: center;
    border: 1px solid red;
    margin: auto;
    
    `

export const BodyForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 395px;
    height: 562px;
    margin: auto;
    `

export const HeaderForm = styled.div`
    width: 258.56px;
    height: 90.92px;
    margin: auto;
    p{
        color: #FFFFFF;
        font-family: Prata;
        font-size: 60px;
        font-weight: 400;
        line-height: 82px;
        letter-spacing: 0em;
        text-align: left;
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
