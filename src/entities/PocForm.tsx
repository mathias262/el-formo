import React from 'react'
import { css } from 'goober'

import { CInput } from '../components/CInput'
import { CButton } from '../components/CButton'
import { CForm } from '../components/CForm'

const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
}

export class PocForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const className = css`
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 1rem;
            padding: 1rem;
            background: lightgray;
        `

        return (
            <CForm className={className} onSubmit={handleSubmit}>
                <CInput
                    type={'number'}
                    name={'total-loan'}
                    defaultValue={String(310000)}
                />
                <CInput
                    type={'number'}
                    name={'repayment-time'}
                    defaultValue={String(12)}
                />
                <CButton variant={'success'}>Submit</CButton>
            </CForm>
        )
    }
}
