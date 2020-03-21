import React from 'react'
import { css } from 'goober'

import { ElementInterface } from '../../utils/types/types'

export interface ElementProps extends ElementInterface {
    tag: string
}

const Base = ({ tag, children, style, ...props }: ElementProps) => {
    const className = css`
        margin: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return React.createElement(tag, {
        children,
        className,
        ...(props || [])
    })
}

export const Span = ({ children, ...props }: ElementInterface) => {
    return (
        <Base tag="span" {...props}>
            {children}
        </Base>
    )
}

export const Em = ({ children, ...props }: ElementInterface) => {
    return (
        <Base tag="em" {...props}>
            {children}
        </Base>
    )
}

export const I = ({ children, ...props }: ElementInterface) => {
    return (
        <Base tag="i" {...props}>
            {children}
        </Base>
    )
}
