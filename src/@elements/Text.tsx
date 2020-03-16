import React from 'react'
import { css } from 'goober'

import { ChildElementProps, ElementProps } from '../utils/types/types'

export interface ButtonProps {
    as?: string
    children?: ChildElementProps
    style?: string
    [key: string]: ElementProps
}

const ElText = ({ as = 'span', children, style, ...props }: ButtonProps) => {
    const className = css`
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return React.createElement(as, { children, className, ...(props || []) })
}

export default ElText
