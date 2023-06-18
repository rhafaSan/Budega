import * as Styled from './styles'

interface ButtonWithIconProps{
    label: string
    type: string
    icon?: string
}

export const ButtonWithIcon = ({ type,label }: ButtonWithIconProps) => {
    return(
        <Styled.ButotnDiv $type={type}>
            <Styled.Button >
                {label}
            </Styled.Button>

        </Styled.ButotnDiv>
    )
}