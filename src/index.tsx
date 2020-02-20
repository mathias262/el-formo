import { h, render } from 'preact'
import { setPragma, glob } from 'goober'

import { Home } from './pages/Home'

setPragma(h)

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

render(<Home />, document.getElementById('root'))
