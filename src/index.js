import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; the files were dummy files and were deleted. App object was coming from there.
//ReactDOM.render(<App />, document.getElementById('root'));

const Hello = () => {
    return (
    <div>
        <p>Hello World</p>
    </div>
    )
}
const App = () => {
    return(
    <div>
        <h1>Greetings</h1>
        <Hello />
    </div>
    
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));