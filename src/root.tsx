import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { setPragma, glob } from 'goober'

import CSS from './constants/css'
import { generateCssVariables } from './utils/ts/generate-css-variables'

import RElements from './routes/RElements'
import REntities from './routes/REntities'

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
        font-size: var(--font-size-base);
        line-height: 1.15;
        margin: 0;
    }
`
const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/elements">Elements</Link>
                        </li>
                        <li>
                            <Link to="/entities">Entities</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/">
                        <RElements />
                    </Route>
                    <Route path="/entities">
                        <REntities />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Router />, document.getElementById('root'))
