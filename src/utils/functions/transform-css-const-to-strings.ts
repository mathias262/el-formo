export const genCssVariables = (constObj: Object) => {
    let str = []
    Object.keys(constObj).forEach(categoryKey => {
        Object.keys(constObj[categoryKey]).forEach(valueKey => {
            if (typeof constObj[categoryKey][valueKey] === 'object') {
                Object.keys(constObj[categoryKey][valueKey]).forEach(variantKey => {
                    const value = `--${categoryKey}-${valueKey}-${variantKey}: ${constObj[categoryKey][valueKey][variantKey]};`
                    str.push(value)    
                })
            } else {
                const value = `--${categoryKey}-${valueKey}: ${constObj[categoryKey][valueKey]};`
                str.push(value)
            }
        })
    })
    return str
}