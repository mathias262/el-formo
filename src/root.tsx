import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import CSS from './@constants/css'
import { generateCssVariables } from './utils/ts/generate-css-variables'

import RHome from './@routes/RHome'

setPragma(React.createElement)

glob`
    html {
        font-size: 100%;
    }
    body {
        margin: 0;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        ${generateCssVariables(CSS)}
    }
`

ReactDOM.render(<RHome />, document.getElementById('root'))
