import React from 'react'
import { css } from 'goober'
import loadable from '@loadable/component'

import { CInput } from '../@components/CInput'
import { CButton } from '../@components/CButton'
import { CForm } from '../@components/CForm'

const CIcon = loadable(() => import('../@components/CIcon'))

const EForm = props => {
    const className = css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1rem;
        padding: 1rem;
        background: lightgray;
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
            <CIcon name={'airplay'} width="2em" height="2em" />
            <CIcon name={'airplay'} width="2em" height="2em" />
            <CIcon name={'airplay'} width="2em" height="2em" />
            <CIcon name={'airplay'} width="2em" height="2em" />
            <CIcon name={'activity'} width="2em" height="2em" />
            <CIcon name={'anchor'} width="2em" height="2em" />
            <CIcon name={'arrow-right'} width="2em" height="2em" />
            <CIcon name={'arrow-down'} width="2em" height="2em" />
        </CForm>
    )
}

export default EForm
