import React from 'react'

import { PocForm } from '../entities/PocForm'

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
