import React from 'react'
import { css } from 'goober'

import { shouldTextBeDark } from '../utils/ts/should-text-be-dark'

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
        align-items: center;
        background-color: var(--theme-color-brand);
        border-radius: var(--border-radius-default);
        border: solid var(--border-width-default) var(--theme-color-brand);
        color: ${
            shouldTextBeDark('var(--theme-color-brand)')
                ? 'var(--theme-color-text-black);'
                : 'var(--theme-color-text-white);'
        }
        cursor: pointer;
        display: flex;
        font-family: inherit
        font-size: var(--font-size-base);
        justify-content: center;
        margin: var(--spacing-0);
        padding: var(--spacing-2);
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