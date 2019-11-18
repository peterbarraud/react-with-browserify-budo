import React, {Component} from 'react'

// for hints about events and state, see events.and.state.js
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleNameChange = e => {
        this.setState({name: e.target.value});
    }

    render = () => {
        return (
            <>
                <h1>Pass data to a child</h1>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                <Child name={this.state.name} />
            </>
        )
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
    }


    render = () => {
        return (
            <>
                <h1>Inside the child element</h1>
                <label>{this.props.name}</label>
            </>
        )
    }
}
export class App extends Component {
    render = () => {
        return (
            <>
                <Parent />
            </>
        )
    }
}