import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="Header">
            <Link to='/'>Home</Link>
            <Link to='/mail'>Contact</Link>
        </div>
    )
}