import React from 'react'

import Input from '../elements/forms/Input'
import Button from '../elements/forms/Button'
import Form from '../elements/forms/Form'
import Svg from '../elements/embedded/Svg'
import P from '../elements/text/Paragraph'
import { Span } from '../elements/text/TextSemantics'
import { H1 } from '../elements/text/Headings'

const FormRegistration = () => {
    return (
        <Form onSubmit={e => console.log} name="Form name">
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
            <Button type="button" onclick={e => console.log(e)}>
                <Svg
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
                <Span style={'white-space: nowrap;'}>
                    This is a very long and unnecessary text
                </Span>
            </Button>
            <Button type="button" onclick={e => console.log(e)}>
                <Svg
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
                <Span>This is a very long and unnecessary text</Span>
            </Button>
            <Button type="button" disabled={true} onclick={e => console.log(e)}>
                <Span>This is a long text</Span>
                <Svg
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
            </Button>
            <Svg
                name={'activity'}
                width="2em"
                height="2em"
                cache={false}
                i18n={{ ariaLabel: 'Icon activity' }}
            />
            <Svg
                name={'anchor'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon anchor' }}
            />
            <Svg
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
            <P>Random text yao!</P>
            <H1>Hejsan svejsan</H1>
            <Button type="button" onclick={e => console.log(e)}>
                what
            </Button>
        </Form>
    )
}

export default FormRegistration
