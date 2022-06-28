import { Component } from "react";
import "./exp.css"

export default class InterestHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            interests : ["Artificial Intelligence", "Cryptography and Cryptanalysis", "Competitive Programming and Algorithms",
        "Parallel and Distributed Computing", "Quantum Computing", "Constraint Satisfaction", "Number Theory, Abstract Algebra and Category Theory", "Astrophysics", "National Anthems",
    "Minecraft", "European History", "China's History"],
        }
    }

    render() {
        return <>
            <div className="interestBox">
                <h2 className="centerise">Research and Other Interests</h2>
                {this.state.interests.map(interests => <p>{interests}</p>)}
            </div>
        
        </>
    }
}