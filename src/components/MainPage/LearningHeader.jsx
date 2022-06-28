import { Component } from "react";
import "./exp.css"

export default class WhatIsRussellLearning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            integer : 0,
            topics : ["Scala", "Rust", "Group Theory", "Sequences", "Orbital", "Complex Analysis" ],
            actions : ["learning", "learning", "learning", "revising", "busy with", "attacking"],
            length : 6,
        }
    }

    rngTask = () => {
        let currentNumber = this.state.integer;
        let randomNumber = Math.floor(Math.random() * this.state.length);
        while( randomNumber == currentNumber) {
            randomNumber = Math.floor(Math.random() * this.state.length);
        }
        this.setState({integer : randomNumber});
        return <h3>{this.state.actions[randomNumber] + this.state.topics[randomNumber]}</h3>
    }

    render() {
        return <div className="widgetBox">
            <h2 className="spacer">What is Russell currently doing?</h2>
            <p>Russell is currently</p>
            <h3>{this.state.actions[this.state.integer] +" " + this.state.topics[this.state.integer]}</h3>
            <button onClick={this.rngTask}>What Else?</button>
        </div>
    }
}