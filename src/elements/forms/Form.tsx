import React, { FormEvent } from 'react'
import { css } from 'goober'

// https://html.spec.whatwg.org/multipage/#the-form-element

import { ElementInterface } from '../../utils/types/types'

export interface ElementProps extends ElementInterface {
    name: string
    onSubmit: (e: FormEvent) => any
    target?: string
}

export default ({ name, style, ...props }: ElementProps) => {
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
