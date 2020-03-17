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
        padding: 2rem;
        background: #f1f2f7;
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
