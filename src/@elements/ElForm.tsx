import React from 'react'
import { css } from 'goober'

// https://html.spec.whatwg.org/multipage/#the-form-element

import { ChildElementProps } from '../utils/types/types'

export interface ElFormProps {
    ariaLabel: string
    children?: ChildElementProps
    onSubmit: (e: any) => void
    [x: string]: any
}

export const ElForm = ({ ariaLabel, ...props }: ElFormProps) => {
    const className = css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: var(--spacing-8);
        padding: var(--spacing-8);
        background: var(--color-gray-100);
        ${props.style}
    `
    return (
        <form
            aria-label={ariaLabel}
            className={className}
            onSubmit={props.onSubmit}
            {...props}
        >
            {props.children}
        </form>
    )
}
