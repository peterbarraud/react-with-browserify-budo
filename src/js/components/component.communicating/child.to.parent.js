import React, {Component} from 'react'

class Parent extends Component {
    constructor (props) {
        super(props);
        // this.parentHandleChange = this.parentHandleChange.bind(this);
        this.state = {
            name: ''
        }
    }

    parentHandleChange = (name) => this.setState({name: name});


    render = () => {
        return (
            <>
            <h1>Parent element</h1>
            <label>{this.state.name}</label>
            <Child onChildNameChange={this.parentHandleChange} />
            </>
        );
    }
}
  
class Child extends Component {
    constructor(props) {
        super(props);
        // this.childHandleChange = this.childHandleChange.bind(this);
        this.state = {
            name: ''
        }
    }

    childHandleChange = e => {
        this.setState({name:e.target.value})
        // calls the parent method, parentHandleChange via props
        this.props.onChildNameChange(e.target.value);
    }
    render = () => {
        return (
            <>
                <h1>Child element</h1>
                <input value={this.state.name} onChange={this.childHandleChange} placeholder="Enter a name"/>
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