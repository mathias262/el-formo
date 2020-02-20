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

ReactDOM.render(<Home />, document.getElementById('root'))
