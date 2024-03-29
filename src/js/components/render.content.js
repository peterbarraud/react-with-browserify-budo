import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// the class syntax
// used if you've got other stuff live state and events to handle
class ClassSyntax extends Component {
    render = () => {
        // use the Fragments (shortcut) to avoid injecting unnecessary divs into your content
        // see for more on Fragments and when to use the full syntax in place of the shortcut
        return (
            <>
                <h1>Using the Class syntax to render</h1>
            </>
        )
    }
}

// for light elements. No access to stuff like props, state, events
// TODO: What about hooks?
const FunctionSyntax = () =>
    <>
        <h1>Using the Function syntax to render</h1>
    </>

export class App extends Component {
    render() {
        return (
            <>
                <ClassSyntax />
                <FunctionSyntax />
            </>
        )
    }
}
