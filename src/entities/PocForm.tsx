import React from 'react'
import { css } from 'goober'

import { CInput } from '../components/CInput'
import { CButton } from '../components/CButton'
import { CForm } from '../components/CForm'
import { CIcon } from '../components/CIcon'

export default class PocForm extends React.Component {
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

        const iconRotation = css`
            transform: rotate(90deg);
        `

        return (
            <CForm className={className} onSubmit={() => console.log}>
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
                <CIcon name={'airplay'} width="2rem" height="2rem" />
                <CIcon name={'airplay'} width="2rem" height="2rem" />
                <CIcon name={'airplay'} width="2rem" height="2rem" />
                <CIcon name={'airplay'} width="2rem" height="2rem" />
                <CIcon name={'activity'} width="2rem" height="2rem" />
                <CIcon name={'anchor'} width="2rem" height="2rem" />
                <CIcon name={'arrow-right'} width="2rem" height="2rem" />
                <CIcon name={'arrow-down'} width="2rem" height="2rem" />
            </CForm>
        )
    }
}
