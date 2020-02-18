import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import { Home } from './pages/Home'

setPragma(React.createElement)

glob`
    html {
        font-size: 20px;
    }
    body {
        margin: 0;
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
