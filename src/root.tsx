import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import CSS from './@constants/css'
import { genCssVariables } from './utils/functions/transform-css-const-to-strings'

import RHome from './@routes/RHome'

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
    :root {
        ${genCssVariables(CSS).join('\n')}
    }
`

ReactDOM.render(<RHome />, document.getElementById('root'))
