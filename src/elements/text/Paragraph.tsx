import React, { ReactComponentElement } from 'react'
import { css } from 'goober'

import { ElementInterface } from '../../utils/types/types'

export interface ElementProps extends ElementInterface {
    tag?: string
    displayTag?: string
}

export const P = ({ children, style, ...props }: ElementProps) => {
    const className = css`
        margin: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return (
        <p className={className} {...props}>
            {children}
        </p>
    )
}
