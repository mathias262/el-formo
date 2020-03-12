import React from 'react'
import { css } from 'goober'

import ElInput from '../@el/ElInput'
import ElButton from '../@el/ElButton'
import ElForm from '../@el/ElForm'
import ElSvg from '../@el/ElSvg'

const EeForm = props => {
    const className = css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1rem;
        padding: 1rem;
        background: lightgray;
    `
    return (
        <ElForm className={className} onSubmit={() => console.log}>
            <ElInput
                type={'number'}
                name={'total-loan'}
                defaultValue={String(310000)}
            />
            <ElInput
                type={'number'}
                name={'repayment-time'}
                defaultValue={String(12)}
            />
            <ElButton variant={'success'}>Submit</ElButton>
            <ElSvg
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <ElSvg
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <ElSvg
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <ElSvg
                name={'activity'}
                width="2em"
                height="2em"
                cache={false}
                i18n={{ ariaLabel: 'Icon activity' }}
            />
            <ElSvg
                name={'anchor'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon anchor' }}
            />
            <ElSvg
                name={'arrow-right'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-right' }}
            />
            <ElSvg
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
        </ElForm>
    )
}

export default EeForm
