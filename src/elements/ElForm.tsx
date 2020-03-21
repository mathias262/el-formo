import React, { FormEvent } from 'react'
import { css } from 'goober'

// https://html.spec.whatwg.org/multipage/#the-form-element

import { ElInterface } from '../utils/types/types'

export interface ElFormProps extends ElInterface {
    name: string
    onSubmit: (e: FormEvent) => any
    target?: string
}

export const ElForm = ({ name, style, ...props }: ElFormProps) => {
    const className = css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: var(--spacing-8);
        padding: var(--spacing-8);
        background: var(--color-gray-100);
        ${style}
    `
    return (
        <form className={className} {...props}>
            {props.children}
        </form>
    )
}
