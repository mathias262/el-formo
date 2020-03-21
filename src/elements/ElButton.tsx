import React from 'react'
import { css } from 'goober'

import { shouldTextBeDark } from '../utils/ts/should-text-be-dark'
import * as STYLES from '../utils/styles/styles'

// https://html.spec.whatwg.org/#the-button-element

import { ElInterface } from '../utils/types/types'

export interface ElButtonProps extends ElInterface {
    type: 'button' | 'submit' | 'reset'
}

export const ElButton = ({
    style,
    children,
    type,
    ...props
}: ElButtonProps) => {
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
        > :not(:first-child) {
            margin-left: var(--spacing-2);
        }
        ${STYLES.disabled()}
        ${style}
    `
    return (
        <button className={className} type={type} {...props}>
            {children}
        </button>
    )
}
