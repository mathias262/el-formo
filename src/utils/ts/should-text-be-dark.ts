import { getValueFromCssVar } from './get-value-from-css-var'

export const shouldTextBeDark = (cssVar: String) => {
    let value: string = getValueFromCssVar(cssVar)
    if (!value.startsWith('#')) {
        throw Error('Color variable needs to be a hex value')
    }
    value = value.replace('#', '')
    const r = parseInt(value.substr(0, 2), 16)
    const g = parseInt(value.substr(2, 2), 16)
    const b = parseInt(value.substr(4, 2), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128
}
