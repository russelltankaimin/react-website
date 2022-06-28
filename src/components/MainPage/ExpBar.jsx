import { Component } from "react";
import "./exp.css";
export default class ExpBar extends Component {
    render() {
        return <>
            <h2 className="centerise">Experience</h2>
            <div className="board-row">
                    {createExpBox(job4, period4, org4, dec4)}
                    {createExpBox(job2, period2, org2, dec2, adv2)}
                   
            </div>
            <div className="board-row">
                {createExpBox(job3, period3, org3, dec3, adv3)}
                {createExpBox(job1, period1, org1,dec1,adv1)}
            </div>
        </>
    };
}

function createExpBox(job, period, org, desc, advisor) {
    return <div className="box">
        <div className="date-text">{period}</div>
        <h3>{job}</h3>
        <div className="side-text">{(org == null ? "Self-Employed" : org)}</div>
        <div className="side-text">{desc}</div>
    </div>
}

// List of jobs done 

let job1 = "Cybersecurity Intern";
let job2 = "Research Intern";
let job3 = "Air Force Technician(F16)";
let job4 = "Mathematics Tutor";

let period1 = "Jan 2019 - Feb 2019";
let period3 = "May 2019 - Feb 2021";
let period2 = "March 2021 - June 2021";
let period4 = "Feb 2021 - Nov 2021";

let org1 = "Defence Science and Technology Agency(DSTA) Cybersecurity PC";
let org3 = "Republic of Singapore Air Force, Air Power Generation Command, Tengah Airbase";
let org2 = "DSO National Laboratories, Information Division (Information Exploitation Lab)";
let org4 = null;

let dec1 = "Implement laddering algorithms for the newly-approved NIST curve25519 which does scalar multiplication which is secure against side-channel attacks.";
let dec3 = "Intermediate Level F-16 Technician(3SG), responsible for all flight administrative matters, served as Chief Controller.";
let dec2 = "Identifying Useful Lemmas from Unsatisfiable CNF(Conjunctive Normal Form) Formulas of AES Round 1 using MiniSAT SAT Solver with Machine Learning Techniques";
let dec4 = "I taught Secondary School and Integrated Programme(IP) Mathematics. I have experience teaching JC H2 Mathematics and I take the effort to code some of my teaching materials to aid in my student's learning";

let adv1 = "Seah Zhi Qian";
let adv3 = null;
let adv2 = "Dr Chai Kian Ming, Adam";
let adv4 = null;