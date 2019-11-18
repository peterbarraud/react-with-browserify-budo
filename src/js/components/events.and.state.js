import React, {Component} from 'react'

// using the class syntax
export class App extends Component {
    // remember that constructors cannot be arrow function:
    // https://blog.logrocket.com/anomalies-in-javascript-arrow-functions/
    constructor(props) {
        // remember to put the super statement at the start of the constructor
        super(props);
        // bind the change event
        // why: "The callback is made in a different context. You need to bind to this in order to have access inside the callback"
        // as per this post: https://stackoverflow.com/a/31045750/4672179
        // this.handleclick = this.handleclick.bind(this);
        // but then, this blog says using arrow functions negates the need for the above line
        // https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25
        // init state inside the constructor
        this.state = {
            name: ''
        }
    }
    // you can also init the state object simply within the class
    // but then you don't use the "this"
    /*
    state = {
        name: ''
    }
    */
    // However, this blog says putting it outside the constructor is a bad idea
    // https://daveceddia.com/where-initialize-state-react/


    handleclick = e => {
        console.log(this.state.name);
        e.preventDefault();
    }

    // to manage the state of the input box (data binding, if you will)
    nameChange = e => {
        this.setState({name: e.target.value});
    }

    render = () => {
        // use the empty tags to avoid injecting unnecessary divs into your content
        return (
            <>
                <h1>Handling events</h1>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.nameChange} />
                <button onClick={this.handleclick}>Click</button>
                {/* displays the changes in the "name" */}
                <label>{this.state.name}</label>
            </>
        )
    }
}
