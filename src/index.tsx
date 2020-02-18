import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from './pages/Home'

class Root extends React.Component {
    render() {
        return <Home />
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))
