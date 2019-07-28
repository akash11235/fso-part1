import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; the files were dummy files and were deleted. App object was coming from there.
//ReactDOM.render(<App />, document.getElementById('root'));

const Hello = (props) => {
    return (
    <div>
        <p>Hello {props.name}</p>
    </div>
    )
}
const App = () => {
    return(
    <div>
        <h1>Greetings</h1>
        <Hello name="George"/>
        <Hello name="Daisy"/>
        <Hello name="Robert"/>
    </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));