import { StyleProps } from './index'

const focus = ({ color = 'green' }: StyleProps) => {
    return `
        &:focus {
            box-shadow: ${color} 0px 0px 0px 0.2em;
        }
    `
}

export default { focus }
