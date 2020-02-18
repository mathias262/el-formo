import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import { Home } from './pages/Home'

setPragma(React.createElement)

glob`
    body {
        margin: 0;
        font-size: 20px;
    }
    * {
        box-sizing: border-box;
    }
`

class Root extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Home />
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))
