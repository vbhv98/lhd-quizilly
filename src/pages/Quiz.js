import React, { Component } from 'react'
import pyQuestions from '../python'
// import data from '../data'
import NavBar from '../components/NavBar';
import {Redirect} from 'react-router-dom'
import data from '../data';
import firebase from '../firebase'
import './Quiz.css'
// import CryptoJS from 'crypto-js'

export default class Quiz extends Component {


    constructor(props) {
        super(props)

        this.optionRef = React.createRef()
        this.state = {
            questions: pyQuestions,
            Qno: 1,
            answers: '',
            score: 0,
            selectedOpt: 'a',
            completed: false
        }
    }

    nextQues = (event) => {

        if(this.state.Qno >= this.state.questions.length) {
            alert(`Your score: ${this.state.score}`)
            this.setState({
                completed: true
            })
        }
        else {
            const {Qno, questions, selectedOpt} = this.state
            let newScore = (questions[Qno-1].answer === selectedOpt) ? this.state.score+1 : this.state.score 
            this.setState((prevS) => ({
                Qno: prevS.Qno+1,
                answers: prevS.answers+prevS.selectedOpt,
                score: newScore
            }))
        }
    }

    changeOpt = (event) => {
        this.setState({
            selectedOpt: event.target.value
        })
    }

    componentWillUnmount() {
        if(!this.state.completed) return;
        data.answers = this.state.answers
        data.score = this.state.score;
        const {answers, score} = data;
        const id = data.email.split('@')[0].replace('.', '')
        let leaderboardRef = firebase.database()
                                    .ref('/user')
                                    .child(`/user-${id}-${data.count++}`)

        localStorage.setItem('count', data.count)
        leaderboardRef.set({
            score,
            answers
        })
    }

    render() {
        const {Qno, questions, completed} = this.state;
        let question = questions[Qno-1]
        return (
                completed ? <Redirect to='/' /> : (
                    <React.Fragment>
                    <NavBar />
                    <div className="quiz">
                            <h2>{question.Question}</h2>
                            <ul>
                                <li><input 
                                    checked={this.state.selectedOpt === 'a'} 
                                    name="o" id="o1" value='a' 
                                    type="radio"
                                    onChange={this.changeOpt}
                                /> <label htmlFor="o1"> {question.a} </label></li>
                                <li><input 
                                    checked={this.state.selectedOpt === 'b'} 
                                    name="o" id="o2" value='b' 
                                    type="radio"
                                    onChange={this.changeOpt}
                                /> <label htmlFor="o2"> {question.b} </label></li>
                                <li><input 
                                    checked={this.state.selectedOpt === 'c'} 
                                    name="o" id="o3" value='c' 
                                    type="radio"
                                    onChange={this.changeOpt}
                                /> <label htmlFor="o3"> {question.c} </label></li>
                                <li><input 
                                    checked={this.state.selectedOpt === 'd'} 
                                    name="o" id="o4" value='d' 
                                    type="radio"
                                    onChange={this.changeOpt}
                                /> <label htmlFor="o4"> {question.d} </label></li>
                            </ul>
                            <button onClick={this.nextQues}>Next</button>
                    </div>
                </React.Fragment>
            )
        )
    }
}
