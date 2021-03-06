import { StyleProps } from './styles'

const focus = ({ color = 'green' }: StyleProps) => {
    return `
        &:focus {
            box-shadow: ${color} 0px 0px 0px 0.2em;
        }
    `
}

export default { focus }
