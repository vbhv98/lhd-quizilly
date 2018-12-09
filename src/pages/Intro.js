import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
// import AppContext from '../context'
import data from '../data'
import './Intro.css'

class Intro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: data.email
        }
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    componentWillUnmount() {
        data.email = this.state.email
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="App">
                    <h1 className="headline">Howdy!<br />This is Quizilly!</h1>
                    <br />
                    <label>What's your email? <br />
                        <input 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            type="email" />
                    </label>
                    <Link to="catagory"><a>Submit</a></Link>
                </div>
            </React.Fragment>
          );
    }
}

export default Intro