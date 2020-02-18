import React from 'react'
import ReactDOM from 'react-dom'

class Root extends React.Component {
    render() {
        return (
            <div className="Root">
                <h1>Hello, react!</h1>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))
