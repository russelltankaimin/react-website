import { Component } from "react";

export default class IntroHeader extends Component {
    render() {
        return <>
            <h2>{intro}</h2>
            <h4>{nextline}</h4>
            <p>{mainText}</p>
        </>
    };
}

let intro = "Hi! My name is Russell and I am a student at the National University of Singapore(NUS) studying Computer Science and Mathematics";
let nextline = "I am a curious individual who tends to go beyond my comfort level in extending my knowledge beyond the classroom.";
let mainText = "I am constantly devoting my time into the study of Mathematics and various fields of Computing. I have dabbled into the field of Cryptography, Artificial Intelligence, Quantum Computing, Abstract Algebra and Algebraic Geometry. Curiosity is one of my strongest traits and I aspire to be a Research Scientist studying one (or more!) of the fields mentioned above."