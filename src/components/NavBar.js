import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav">
            <li className="nav-item"><Link to='/'><a>New Quiz</a></Link></li>
            <li className="nav-item"><Link to='about'><a>About</a></Link></li>
        </ul>
      </nav>
    )
  }
}
