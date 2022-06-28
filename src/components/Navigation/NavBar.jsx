import "./navigationBar.css"
export default function NavBar() {
    // state = {
    //     links : ["/NUS", "/BlogRoll", "/InterestingArticles", "/Me"],
    //     names : ["NUS Module Reviews", "Blog Roll", "Interesting Articles", "About Me"]
    // }

    // function createList(link, name) {
    //     return (<li href={link}>name</li>)
    // }
    let names = [["About", "/Me"], 
    ["Interesting Articles", "/articles"],
    ["NUS Module Reviews", "/NUS"],
    ["Blog Roll", "/Blog Roll"]];
    return <nav className="nav">
      <a href="/" className="site-title"> Tan Kai Min, Russell 陈界铭</a>
      <ul>
        {names.map(t => createList(t[1],t[0]))}
      </ul>  
    </nav>
}

function createList(link, name) {
    return <li key={link}><a href={link}>{name}</a></li>;
}
