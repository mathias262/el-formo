import React from 'react'
import loadable from '@loadable/component'

const EForm = loadable(() => import('../entities/EForm'), {
    fallback: <div>Loading...</div>
})

const PHome = props => {
    return (
        <main>
            <EForm />
        </main>
    )
}

export default PHome
