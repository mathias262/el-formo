import React, { ReactNode } from 'react'
import { css } from 'goober'

// https://html.spec.whatwg.org/#the-button-element

export interface ElButtonProps {
    style?: string
    type?: 'button' | 'submit' | 'reset'
    [key: string]: any
}

export const ElButton = ({ style, children, ...props }: ElButtonProps) => {
    const { type = 'submit' } = props
    // FIXME: Grid doesn work on buttons in chrome...
    const className = css`
        border: solid var(--border-width-4) var(--color-gray-400);
        padding: var(--spacing-2);
        margin: var(--spacing-0);
        font-size: var(--font-size-base);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:disabled {
            cursor: not-allowed;
        }
        > :not(:first-child) {
            margin-left: var(--spacing-2);
        }
        ${style}
    `
    return (
        <button className={className} type={type} {...props}>
            {children}
        </button>
    )
}
