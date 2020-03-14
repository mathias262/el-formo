import React from 'react'
import { css } from 'goober'

//https://html.spec.whatwg.org/multipage/input.html#the-input-element

export interface InputProps {
    type: string
    name: string
    defaultValue: string
    [x: string]: any
}

const Input = (props: InputProps) => {
    let { type, placeholder = '...' } = props

    const typeStyle = type => {
        switch (type) {
            case 'number':
                return `
                -moz-appearance:textfield; 
                &::-webkit-inner-spin-button,
                &::-webkit-outer-spin-button { 
                  -webkit-appearance: none; 
                  margin: 0; 
                }
            `
        }
    }

    const className = css`
        border: solid 3px gray;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        width: 100%;
        display: block;
        ${typeStyle(type)}
    `

    return <input className={className} placeholder={placeholder} {...props} />
}

export default Input
