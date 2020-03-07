import React from 'react'
import { css } from 'goober'
import STYLES from '../styles/'

// https://html.spec.whatwg.org/#the-button-element

type CButtonProps = {
    variant: 'success' | 'error'
    [x: string]: string
}

export const CButton = (props: CButtonProps) => {
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
        ${theme(props.variant)}
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-gap: 0.5rem;
        cursor: pointer;
    `
    return (
        <button className={className} {...props}>
            {props.children}
        </button>
    )
}
