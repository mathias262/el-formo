import React from 'react'
import { css } from 'goober'
import { CssFocus } from '../constants/css'

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
            `
            case 'error':
                return `
                color: white;
                background: green;
                border: solid 2px darkgreen;
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
        ${CssFocus}
    `
    return (
        <button className={className} {...props}>
            {props.children}
        </button>
    )
}
