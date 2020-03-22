import React, { ReactComponentElement } from 'react'
import { css } from 'goober'

import { ElementInterface as EI } from '../../utils/types/types'

export interface ElementProps extends EI {
    tag?: string
    displayTag?: string
}

export default ({ children, style, ...props }: ElementProps) => {
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
