import React from 'react'
import loadable from '@loadable/component'

const PocForm = loadable(() => import('../entities/PocForm'), {
    fallback: <div>Loading...</div>
})

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <PocForm />
            </main>
        )
    }
}
