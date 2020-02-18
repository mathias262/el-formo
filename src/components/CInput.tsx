import React from 'react'

type CInputProps = {
    type?: string
}

export const CInput = ({ type = 'text' }: CInputProps) => {
    return <input type={type} />
}
