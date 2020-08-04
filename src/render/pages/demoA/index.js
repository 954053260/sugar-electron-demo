import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './App';
import './index.less';

const Index = hot(module)(App);
ReactDOM.render(<Index />, document.getElementById('app'));
