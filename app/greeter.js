import React, {Component} from 'react'
import config from './config.json'

import styles from './greeter.css'

// var config = require('./config.json')

// console.log(config)
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.innerHTML = config.greetText;
//   return greet;
// }


class Greeter extends Component {
    render() {
      return (
        <div className = {styles.root }>{config.greetText}</div>
      )
    }
}

export default Greeter;