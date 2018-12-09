import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import './catagory.css'

class Catagory extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ul className="list">
                    <li className="list-item"><Link to="quiz"><a href="">Python</a></Link></li>
                    <li className="list-item"><Link to="quiz"><a href="">C++</a></Link></li>
                    <li className="list-item"><Link to="quiz"><a href="">HTML</a></Link></li>
                    <li className="list-item"><Link to="quiz"><a href="">JavaScript</a></Link></li>
                </ul>
                </React.Fragment>
        );
    }
}

export default Catagory;