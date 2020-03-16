import STYLES from './styles'

export const btnThemes = variant => {
    switch (variant) {
        case 'success':
            return `
            color: white;
            background: green;
            border: solid 2px darkgreen;
            ${STYLES.pseudo.focus({
                color: 'lightgreen'
            })}
        `
        case 'error':
            return `
            color: white;
            background: red;
            border: solid 2px darkred;
            ${STYLES.pseudo.focus({
                color: 'pink'
            })}
        `
    }
}
