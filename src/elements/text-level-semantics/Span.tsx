import React from 'react'
import { css } from 'goober'

import { ElementInterface } from '../../utils/types/types'

export interface ElementProps extends ElementInterface {}

export default ({ children, style, ...props }: ElementProps) => {
    const className = css`
        margin: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return (
        <span className={className} {...props}>
            {children}
        </span>
    )
}
