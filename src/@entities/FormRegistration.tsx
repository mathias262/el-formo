import React from 'react'
import { css } from 'goober'
import STYLES from '../utils/styles/styles'

import Input from '../@elements/Input'
import Button from '../@elements/Button'
import Form from '../@elements/Form'
import Icon from '../@elements/Icon'
import Text from '../@elements/Text'

const FormRegistration = props => {
    const className = css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1rem;
        padding: 1rem;
        background: lightgray;
    `

    return (
        <Form className={className} onSubmit={() => console.log}>
            <Input
                type={'number'}
                name={'total-loan'}
                defaultValue={String(310000)}
            />
            <Input
                type={'number'}
                name={'repayment-time'}
                defaultValue={String(12)}
            />
            <Button variant="success">
                <Icon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
                <Text>This is a long text</Text>
            </Button>
            <Icon
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <Icon
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <Icon
                name={'airplay'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon airplay' }}
            />
            <Icon
                name={'activity'}
                width="2em"
                height="2em"
                cache={false}
                i18n={{ ariaLabel: 'Icon activity' }}
            />
            <Icon
                name={'anchor'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon anchor' }}
            />
            <Icon
                name={'arrow-right'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-right' }}
            />
            <Icon
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
            <Icon
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
        </Form>
    )
}

export default FormRegistration
