import React from 'react'
import { css } from 'goober'

//https://html.spec.whatwg.org/multipage/input.html#the-input-element

import { ElInterface } from '../utils/types/types'

export type ElInputTypes = 'text' | 'number' | 'email' | 'password'

export interface ElInputProps extends ElInterface {
    type: ElInputTypes
    name: string
    placeholder?: string
    defaultValue?: string
}

export const ElInput = ({ style, ...props }: ElInputProps) => {
    let { type, placeholder = '...' } = props

    const typeStyle = type => {
        let style = ''
        switch (type) {
            case 'password':
            case 'email':
            case 'number':
            case 'text':
                style += `
                    border: solid var(--border-width-2) var(--color-gray-400);
                    border-radius: var(--border-radius-default);
                    padding: var(--spacing-2);
                    &:invalid {
                        border-color: var(--color-red-400);
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
        width: 100%;
        display: block;
        ${typeStyle(type)}
        ${style}
    `

    return <input className={className} placeholder={placeholder} {...props} />
}
