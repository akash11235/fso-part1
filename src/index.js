import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; the files were dummy files and were deleted. App object was coming from there.
//ReactDOM.render(<App />, document.getElementById('root'));

const Hello = ({ name,age }) => {
    const bornYear = () => new Date().getFullYear() - age
    return (
    <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear()}</p>
    </div>
    )
}
const App = () => {
    const name="Peter" 
    const age=10
    return(
    <>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26+10}/>
        <Hello name={name} age={age}/>
    </>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));