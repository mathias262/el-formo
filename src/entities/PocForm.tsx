import React from 'react'

import { CInput } from '../components/CInput'
import { CButton } from '../components/CButton'
import { CForm } from '../components/CForm'

const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
}

export const PocForm = () => {
    return (
        <CForm onSubmit={handleSubmit}>
            <CInput />
            <CButton>Submit</CButton>
        </CForm>
    )
}
