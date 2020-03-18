import CSS from '../../@constants/css'

export const getValueFromCssVar = (variable: String) => {
    let arr = variable
        .replace('var(', '')
        .replace(/\)$/g, '')
        .split('-')
    let keys = arr.reduce((acc, value) => {
        if (value) acc.push(value)
        return acc
    }, [])
    let value
    switch (keys.length) {
        case 2:
            value = CSS[keys[0]][keys[1]]
            break
        case 3:
            value = CSS[keys[0]][keys[1]][keys[2]]
            break
        case 4:
            value = CSS[keys[0]][keys[1]][keys[2]][keys[3]]
            break
        default:
            throw Error('Not implemented')
    }
    if (!value) throw Error('Value was not found')
    return value
}
