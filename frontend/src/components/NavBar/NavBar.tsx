import './NavBar.css';
import {Link} from "react-router-dom";
export default function NavBar() {

    return <nav className={"navbar"}>
        <ul>
            <li><Link to={"/"}>Alle</Link></li>
            <li><Link to={"/open"}>Offen</Link></li>
            <li><Link to={"/in_progress"}/></li>
            <li><Link to={"/done"}>Erledigt</Link></li>
        </ul>
    </nav>
}