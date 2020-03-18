import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import CSS from './@constants/css'
import { generateCssVariables } from './utils/ts/generate-css-variables'

import RHome from './@routes/RHome'

setPragma(React.createElement)

glob`
    :root {
        ${generateCssVariables(CSS)}
    }
    html {
        font-size: 100%;
        font-family: var(--font-family-sans);
    }
    body {
        margin: 0;
    }
    * {
        box-sizing: border-box;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
`

ReactDOM.render(<RHome />, document.getElementById('root'))
