import React from 'react'
import loadable from '@loadable/component'

const EeForm = loadable(() => import('../@elEntity/EeForm'), {
    fallback: <div>Loading...</div>
})

const PaHome = props => {
    return (
        <main>
            <EeForm />
        </main>
    )
}

export default PaHome
