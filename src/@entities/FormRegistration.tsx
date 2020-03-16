import React from 'react'
import { css } from 'goober'

import Input from '../@elements/Input'
import Button from '../@elements/Button'
import Form from '../@elements/Form'
import Icon from '../@elements/Icon'
import Text from '../@elements/Text'

const FormRegistration = props => {
    const formClass = css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 1rem;
        padding: 1rem;
        background: lightgray;
    `

    return (
        <Form className={formClass} onSubmit={() => console.log}>
            <Input
                name="number"
                type="number"
                step="1000"
                min="0"
                max="600000"
                defaultValue="310000"
            />
            <Input
                name="text"
                type="text"
                defaultValue="hello world"
                pattern="hello world"
            />
            <Input
                name="email"
                type="email"
                defaultValue=""
                pattern="hello world"
            />
            <Button>
                <Icon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    text={{ ariaLabel: 'Icon airplay' }}
                />
                <Text>This is a long text</Text>
            </Button>
            <Button disabled={true}>
                <Icon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    text={{ ariaLabel: 'Icon airplay' }}
                />
                <Text>This is a long text</Text>
            </Button>
            <Icon
                name={'activity'}
                width="2em"
                height="2em"
                cache={false}
                text={{ ariaLabel: 'Icon activity' }}
            />
            <Icon
                name={'anchor'}
                width="2em"
                height="2em"
                text={{ ariaLabel: 'Icon anchor' }}
            />
            <Icon
                name={'arrow-down'}
                width="2em"
                height="2em"
                text={{ ariaLabel: 'Icon arrow-down' }}
            />
        </Form>
    )
}

export default FormRegistration
