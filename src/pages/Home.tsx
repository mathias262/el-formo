import React from 'react'

const PocForm = React.lazy(() => import('../entities/PocForm'))

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <React.Suspense fallback={<div>loading...</div>}>
                    <PocForm />
                </React.Suspense>
            </main>
        )
    }
}
