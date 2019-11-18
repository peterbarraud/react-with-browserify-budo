import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// of course, these components will probably go into their own .js file and maybe even their own folder
const Nav = () =>
    <>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/contactus"><li>Contact us</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    </>

const Home = () =>
    <>
        <h2>Home</h2>
    </>

const About = () =>
    <>
        <h2>About</h2>
    </>

const ContactUs = () =>
    <>
        <h2>Contact us</h2>
    </>


export const App = () =>
    <Router>
        <div>
            <h1>Not lazy routing</h1>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </Router>  
