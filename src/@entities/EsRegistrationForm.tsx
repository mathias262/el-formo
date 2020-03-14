import React from 'react'
import { css } from 'goober'
import STYLES from '../utils/styles/styles'

import ElInput from '../@elements/ElInput'
import ElButton from '../@elements/ElButton'
import ElForm from '../@elements/ElForm'
import ElIcon from '../@elements/ElIcon'

const Text = props => <span>{props.children}</span>

const EsRegistrationForm = props => {
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
            <ElButton variant="success">
                <ElIcon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
                <Text>Hej</Text>
            </ElButton>
            <ElIcon
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <ElIcon
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <ElIcon
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <ElIcon
                name={'activity'}
                width="2em"
                height="2em"
                cache={false}
                i18n={{ ariaLabel: 'Icon activity' }}
            />
            <ElIcon
                name={'anchor'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon anchor' }}
            />
            <ElIcon
                name={'arrow-right'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-right' }}
            />
            <ElIcon
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
            <ElIcon
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
        </ElForm>
    )
}

export default EsRegistrationForm
