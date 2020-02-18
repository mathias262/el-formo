import React from 'react'
import { css } from 'goober'

//https://html.spec.whatwg.org/multipage/input.html#the-input-element

interface CInputProps {
    type: string
    name: string
    defaultValue: string
    [x: string]: string
}

const style = css`
    border: solid 3px gray;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    width: 100%;
    display: block;
`

export const CInput = (props: CInputProps) => {
    let { type = 'text', placeholder = '...' } = props
    return (
        <input
            className={style}
            type={type}
            placeholder={placeholder}
            {...props}
        />
    )
}
