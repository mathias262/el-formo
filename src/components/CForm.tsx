import * as React from 'react'

type FormProps = {
    action?: string
    method?: string
    children?: any
    onSubmit: (e: any) => void
}

export const CForm = ({
    action = null,
    method = null,
    children = [],
    onSubmit = () => {}
}: FormProps) => {
    return (
        <form action={action} method={method} onSubmit={onSubmit}>
            {children}
        </form>
    )
}
