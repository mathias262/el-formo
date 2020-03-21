import React, { ReactComponentElement } from 'react'
import { css } from 'goober'

import { ElementInterface } from '../../utils/types/types'

export type HeadingLevels = '1' | '2' | '3' | '4' | '5'

export interface ElementProps extends ElementInterface {
    level: HeadingLevels
}

const HeadingBase = ({ level, children, style, ...props }: ElementProps) => {
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

export const H1 = ({ children, ...props }: ElementInterface) => {
    return (
        <HeadingBase level="1" {...props}>
            {children}
        </HeadingBase>
    )
}
export const H2 = ({ children, ...props }: ElementInterface) => {
    return (
        <HeadingBase level="2" {...props}>
            {children}
        </HeadingBase>
    )
}
export const H3 = ({ children, ...props }: ElementInterface) => {
    return (
        <HeadingBase level="3" {...props}>
            {children}
        </HeadingBase>
    )
}
export const H4 = ({ children, ...props }: ElementInterface) => {
    return (
        <HeadingBase level="4" {...props}>
            {children}
        </HeadingBase>
    )
}
export const H5 = ({ children, ...props }: ElementInterface) => {
    return (
        <HeadingBase level="5" {...props}>
            {children}
        </HeadingBase>
    )
}
