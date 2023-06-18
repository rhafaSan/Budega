import * as Styled from './styles'
interface IButton {
    type: string
    label: string
}


export const Button = ({ type, label}:IButton) => {
    return(
        <Styled.Button >
            {label}
        </Styled.Button>
    )
}