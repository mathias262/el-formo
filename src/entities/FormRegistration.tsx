import React from 'react'

import { ElInput } from '../elements/ElInput'
import { ElButton } from '../elements/ElButton'
import { ElForm } from '../elements/ElForm'
import { ElSvg } from '../elements/ElSvg'
import { ElText } from '../elements/ElText'

const FormRegistration = () => {
    return (
        <ElForm onSubmit={e => console.log} name="Form name">
            <ElInput
                name="number"
                type="number"
                step="1000"
                min="0"
                max="600000"
                defaultValue="310000"
            />
            <ElInput
                name="text"
                type="text"
                defaultValue="hello world"
                pattern="hello world"
            />
            <ElInput
                name="email"
                type="email"
                defaultValue=""
                pattern="hello world"
            />
            <ElButton type="button">
                <ElSvg
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
                <ElText style={'white-space: nowrap;'}>
                    This is a very long and unnecessary text
                </ElText>
            </ElButton>
            <ElButton type="button">
                <ElSvg
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
                <ElText>This is a very long and unnecessary text</ElText>
            </ElButton>
            <ElButton type="button" disabled={true}>
                <ElText>This is a long text</ElText>
                <ElSvg
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    i18n={{ ariaLabel: 'Icon airplay' }}
                />
            </ElButton>
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
                name={'arrow-down'}
                width="2em"
                height="2em"
                i18n={{ ariaLabel: 'Icon arrow-down' }}
            />
        </ElForm>
    )
}

export default FormRegistration
