import React, { ReactNode } from 'react'
import { css } from 'goober'
import STYLES from '../utils/styles/styles'

// https://html.spec.whatwg.org/#the-button-element

type ChildElement = string | JSX.Element | Array<JSX.Element>

export interface ButtonProps {
    variant?: 'success' | 'error'
    children?: ChildElement
    style?: string
    [key: string]: ChildElement
}

const Button = ({ style, variant, children, ...rest }: ButtonProps) => {
    const theme = variant => {
        switch (variant) {
            case 'success':
                return `
                color: white;
                background: green;
                border: solid 2px darkgreen;
                ${STYLES.pseudo.focus({
                    color: 'lightgreen'
                })}
            `
            case 'error':
                return `
                color: white;
                background: red;
                border: solid 2px darkred;
                ${STYLES.pseudo.focus({
                    color: 'pink'
                })}
            `
        }
    }

    const className = css`
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-items: center;
        grid-gap: 0.5rem;
        cursor: pointer;
        ${theme(variant)}
        ${style}
    `
    return (
        <button className={className} {...rest}>
            <>{children}</>
        </button>
    )
}

export default Button
