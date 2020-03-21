import React, { ReactComponentElement } from 'react'
import { css } from 'goober'

import { ElInterface } from '../utils/types/types'

export interface ElTextProps extends ElInterface {
    tag?: string
    displayTag?: string
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
