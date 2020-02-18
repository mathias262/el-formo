import React from 'react'

type CButtonProps = {
    type?: string
    children?: any
}

export const CButton = ({ type = 'text', children = [] }: CButtonProps) => {
    return <button type={type}>{children}</button>
}
