import * as Styled from './styles'
interface IButton {
    label: string
    type: string
}

export const Button = ({ label, type }: IButton) => {
    return (
        <Styled.Button typeButton={type} >
            {label}
        </Styled.Button>
    )
}