import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; the files were dummy files and were deleted. App object was coming from there.
//ReactDOM.render(<App />, document.getElementById('root'));
const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    //braces {} within HTML snippet define JS expressions which are then evaluated and embedded 
    //in the final HTML which will be produced.
    return(
    <div>
        
        <p>Hello World, it is {now.toString()}</p>
        <p>{a} plus {b} is {a + b}</p>
    </div>
    
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));