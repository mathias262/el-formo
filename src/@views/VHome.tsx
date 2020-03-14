import React from 'react'
import loadable from '@loadable/component'

const EsRegistrationForm = loadable(
    () => import('../@elBlocks/EsRegistrationForm'),
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
