import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const App = () => (
    <div>
        <p>Hello World</p>
    </div>
)
ReactDOM.render(<App/>, document.getElementById('root'));