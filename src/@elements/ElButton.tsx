import React, { ReactNode } from 'react'
import { css } from 'goober'

import { ElementProps, ChildElementProps } from '../utils/types/types'

// https://html.spec.whatwg.org/#the-button-element

export interface ElButtonProps {
    children?: ChildElementProps
    style?: string
    type?: 'button' | 'submit' | 'reset'
    [key: string]: ElementProps
}

export const ElButton = ({ style, children, ...props }: ElButtonProps) => {
    const { type = 'submit' } = props
    // FIXME: Grid doesn work on buttons in chrome...
    const className = css`
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:disabled {
            cursor: not-allowed;
        }
        > :not(:first-child) {
            margin-left: 0.5rem;
        }
        ${style}
    `
    return (
        <button className={className} type={type} {...props}>
            {children}
        </button>
    )
}
