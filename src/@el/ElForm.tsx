import React from 'react'
import { css } from 'goober'

// https://html.spec.whatwg.org/multipage/#the-form-element

export interface FormProps {
    onSubmit: (e: any) => void
    [x: string]: any
}

const ElForm = (props: FormProps) => {
    const className = css`
        padding: 2rem;
        background: #f1f2f7;
    `
    return (
        <form className={className} onSubmit={props.onSubmit} {...props}>
            {props.children}
        </form>
    )
}

export default ElForm