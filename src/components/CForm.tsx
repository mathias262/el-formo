import * as React from 'react'

// https://html.spec.whatwg.org/multipage/#the-form-element

type FormProps = {
    onSubmit: (e: any) => void
    [x: string]: any
}

export const CForm = (props: FormProps) => {
    return (
        <form onSubmit={props.onSubmit} {...props}>
            {props.children}
        </form>
    )
}
