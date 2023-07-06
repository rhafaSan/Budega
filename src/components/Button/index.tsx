import * as Styled from './styles'
interface IButton {
    label: string
}

export const Button = ({ label}:IButton) => {
    return(
        <Styled.Button >
            {label}
        </Styled.Button>
    )
}