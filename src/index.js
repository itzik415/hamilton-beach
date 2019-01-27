import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import './main.scss';
import { Provider } from 'react-redux'
import { store } from './Redux/store';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));
