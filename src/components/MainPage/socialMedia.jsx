import { Component } from "react";
import "./russellcambridge.jpeg";
import "./sns.css"
import "./exp.css"
import WhatIsRussellLearning from "./LearningHeader";
export default class SocialMediaSites extends Component {
    render() {
        return <span className="next">
            <img src={require("./russellcambridge.jpeg")} alt="Russell's cute face" height="150px" width="150px"></img>
            <div className="nextp">
                <p>instagram : @russell_russell_russell_tan</p>
                <p>codeforces handle: russelltkm</p>
                <p>github : 
                    <a href="https://github.com/russelltankaimin"> russelltankaimin</a>
                </p>
                <p>linkedin : 
                    <a href="https://www.linkedin.com/in/tan-kai-min-russell-b23751128"> Tan Kai Min, Russell</a>
                </p>
            </div>
            <div>
                <WhatIsRussellLearning></WhatIsRussellLearning> 
            </div>
        </span>;
    }
}
