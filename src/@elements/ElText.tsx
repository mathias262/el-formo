import React from 'react'
import { css } from 'goober'

import { ChildElementProps } from '../utils/types/types'

export interface ElTextProps {
    children?: ChildElementProps
    style?: string
    tag?: string
    displayTag?: string
    [key: string]: any
}

export const ElText = ({
    tag = 'span',
    displayTag = 'span',
    children,
    style,
    ...props
}: ElTextProps) => {
    const className = css`
        margin: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return React.createElement(tag, { children, className, ...(props || []) })
}
