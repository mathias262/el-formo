import React from 'react'
import { css } from 'goober'

type ChildElement = string | JSX.Element | Array<JSX.Element>

export interface ButtonProps {
    as?: string
    children?: ChildElement
    style?: string
    [key: string]: ChildElement
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
