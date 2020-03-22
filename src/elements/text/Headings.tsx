import React, { ReactComponentElement } from 'react'
import { css } from 'goober'

import { ElementInterface as EI } from '../../utils/types/types'

export type HeadingLevels = '1' | '2' | '3' | '4' | '5'

export interface ElementProps extends EI {
    level: HeadingLevels
}

const Root = ({ level, children, style, ...props }: ElementProps) => {
    const className = css`
        margin: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        ${style}
    `
    return React.createElement(`h${level}`, {
        children,
        className,
        ...(props || [])
    })
}

export const H1 = (props: EI) => <Root level="1" {...props} />
export const H2 = (props: EI) => <Root level="2" {...props} />
export const H3 = (props: EI) => <Root level="3" {...props} />
export const H4 = (props: EI) => <Root level="4" {...props} />
export const H5 = (props: EI) => <Root level="5" {...props} />
