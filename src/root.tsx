import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import VHome from './@views/VHome'

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

ReactDOM.render(<VHome />, document.getElementById('root'))
