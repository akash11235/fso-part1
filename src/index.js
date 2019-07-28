import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; the files were dummy files and were deleted. App object was coming from there.
//ReactDOM.render(<App />, document.getElementById('root'));

const Hello = (props) => {
    return (
    <div>
        <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
    )
}
const App = () => {
    const name="Peter" 
    const age=10
    return(
    <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26+10}/>
        <Hello name={name} age={age}/>
    </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));