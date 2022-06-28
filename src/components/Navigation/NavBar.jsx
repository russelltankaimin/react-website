import "./navigationBar.css"
export default function NavBar() {
    let names = [["About", "/Me"], 
    ["Interesting Articles", "/articles"],
    ["NUS Module Reviews", "/NUS"],
    ["Blog Roll", "/Blog Roll"],
    ["Projects", "/Projects"]];
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
