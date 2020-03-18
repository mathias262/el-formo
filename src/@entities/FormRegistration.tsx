import React from 'react'

import { ElInput } from '../@elements/ElInput'
import { ElButton } from '../@elements/ElButton'
import { ElForm } from '../@elements/ElForm'
import { ElIcon } from '../@elements/ElIcon'
import { ElText } from '../@elements/ElText'

const FormRegistration = props => {
    return (
        <ElForm onSubmit={() => console.log} ariaLabel={'Form name'}>
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
            <ElButton>
                <ElIcon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    text={{ ariaLabel: 'Icon airplay' }}
                />
                <ElText style={'white-space: nowrap;'}>
                    This is a very long and unnecessary text
                </ElText>
            </ElButton>
            <ElButton>
                <ElIcon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    text={{ ariaLabel: 'Icon airplay' }}
                />
                <ElText>This is a very long and unnecessary text</ElText>
            </ElButton>
            <ElButton disabled={true}>
                <ElText>This is a long text</ElText>
                <ElIcon
                    name={'airplay'}
                    width="1em"
                    height="1em"
                    text={{ ariaLabel: 'Icon airplay' }}
                />
            </ElButton>
            <ElIcon
                name={'activity'}
                width="2em"
                height="2em"
                cache={false}
                text={{ ariaLabel: 'Icon activity' }}
            />
            <ElIcon
                name={'anchor'}
                width="2em"
                height="2em"
                text={{ ariaLabel: 'Icon anchor' }}
            />
            <ElIcon
                name={'arrow-down'}
                width="2em"
                height="2em"
                text={{ ariaLabel: 'Icon arrow-down' }}
            />
        </ElForm>
    )
}

export default FormRegistration
