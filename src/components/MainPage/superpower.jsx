import { Component } from "react";
import "./exp.css"

export default class SuperPowerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progLang : ["C/C++", "Java", "Python", "JavaScript", "Haskell", "R"],
            os : ["MacOS", "Ubuntu"],
            db : ["Firebase", "SQLite3"],
            api : ["Tensorflow", "Pytorch", "ReactJS", "Numpy", "Sci-kit Learn", "Pandas", "Z3"],
            others : ["Android Dev", "HTML/CSS", "MATLAB", "git", "CMAKE", "Heroku"],
            special : ["Mathematical Thinking", "Algorithmic Problem Solving", "Team Management and Leadership"]
        };
    }

    render() {
        return <>
            <h2 className="centerise">Skills</h2>
            <p>My Superpowers! I make it a point to continue updating my skills and learn more in the process!</p>
            {makePair(this.state.progLang, this.state.others, "Programming Languages", "Others")}
            {makePair(this.state.api,this.state.os,"API", "OS")}
            {makePair(this.state.db, this.state.special, "Databases", "Special")}
        </>
    }
}

function createSuperPowerSpot(lst, name) {
    return <div className="flexBox">
        <h3 className="flattenHeader">{name}</h3>
        <ul>{lst.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>
}

function makePair(lst1, lst2, name1, name2) {
    if (lst2 == null) {
        return <div className="board-smallrow">
            {createSuperPowerSpot(lst1, name1)}
        </div>
    } else {
        return <div className="board-smallrow">
            {createSuperPowerSpot(lst1, name1)}
            {createSuperPowerSpot(lst2, name2)}
        </div>
    }
    
}