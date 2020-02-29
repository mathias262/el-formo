import React from 'react'

import Icons from '../icons'

type IconProps = {
    name: string
    size: string
    [x: string]: any
}

export const CIcon = (props: IconProps) => {
    let { fill, stroke = 'currentColor', size } = props

    console.log(Icons)

    const Component = Icons[props.name]
    const keys = Object.keys(Icons)

    if (keys.includes(props.name)) {
        return (
            <Component
                fill={fill}
                stroke={stroke}
                width={size}
                height={size}
                viewBox={'0 0 38 38'}
                xmlns="http://www.w3.org/2000/svg"
                {...props}
                size={undefined}
            />
        )
    } else {
        throw Error(`CIcon with name: ${props.name}, doesn't exist!`)
    }
}
