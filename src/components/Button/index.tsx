import * as Styled from './styles'

interface ButtonProps{
    label: string
    type: string
}

export const Button = ({ type,label }: ButtonProps) => {
    return(
        <Styled.Button $type={type}>
            {label}
        </Styled.Button>
    )
}