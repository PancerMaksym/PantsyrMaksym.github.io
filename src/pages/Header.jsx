import { Link } from "react-router-dom";
import "../style/Header.scss"

export default function Header(){
    return(
        <div className="Header">
            <Link to='/'>Main</Link>
            <div>
                <Link to='/resumes'>Resumes</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}