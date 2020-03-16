import React from 'react'
import { css } from 'goober'

//https://html.spec.whatwg.org/multipage/input.html#the-input-element

export interface InputProps {
    type: string
    name: string
    defaultValue: string
    [x: string]: any
}

const Input = ({ style, ...props }: InputProps) => {
    let { type, placeholder = '...' } = props

    const typeStyle = type => {
        let style = ''
        switch (type) {
            case 'password':
            case 'email':
            case 'number':
            case 'text':
                style += `
                    border: solid 3px gray;
                    padding: 0.25rem 0.5rem;
                    &:invalid {
                        border-color: red;
                    }            
                `
            case 'number':
                style += `
                    -moz-appearance:textfield; 
                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button { 
                        -webkit-appearance: none; 
                        margin: 0; 
                    }
                `
        }
        return style
    }

    const className = css`
        font-size: 1rem;
        width: 100%;
        display: block;
        ${typeStyle(type)}
        ${style}
    `

    return <input className={className} placeholder={placeholder} {...props} />
}

export default Input
