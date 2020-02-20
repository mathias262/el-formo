import { h, Component } from 'preact'

import { PocForm } from '../entities/PocForm'

export class Home extends Component<{}, {}> {
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
