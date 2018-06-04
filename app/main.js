// const greet = require('./greeter.js')

// document.querySelector('#root').appendChild(greet())

import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter';
import './main.css'
// import './greeter.css'

render(<Greeter/>, document.getElementById('root'))