import './NavBar.css';
import {Link} from "react-router-dom";
export default function NavBar() {

    return <nav className={"navbar"}>
        <ul>
            <li><Link to={"/"}>Alle</Link></li>
            <li><Link to={"/open"}>Open</Link></li>
            <li><Link to={"/in_progress"}>Doing</Link></li>
            <li><Link to={"/done"}>Done</Link></li>
        </ul>
    </nav>
}