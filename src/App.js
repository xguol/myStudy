import React, {Component} from 'react'
let bool = false
class App extends Component{
    render() {
        return(
            <ul>
                <li>{bool ? 1 : 0}1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
}

export default App