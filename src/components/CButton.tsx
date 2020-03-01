import React from 'react'
import { css } from 'goober'

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
        &:focus {
            box-shadow: rgba(0, 109, 255, 0.4) 0px 0px 0px 0.2em;
        }
    `
    return (
        <button className={className} {...props}>
            {props.children}
        </button>
    )
}
