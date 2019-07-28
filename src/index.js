import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; the files were dummy files and were deleted. App object was coming from there.
//ReactDOM.render(<App />, document.getElementById('root'));
const App = () => (
    <div>
        <p>Hello World</p>
    </div>
)
ReactDOM.render(<App/>, document.getElementById('root'));