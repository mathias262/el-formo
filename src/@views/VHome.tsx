import React from 'react'
import loadable from '@loadable/component'

const EsRegistrationForm = loadable(
    () => import('../@entities/FormRegistration'),
    {
        fallback: <div>Loading...</div>
    }
)

const PaHome = props => {
    return (
        <main>
            <EsRegistrationForm />
        </main>
    )
}

export default PaHome
