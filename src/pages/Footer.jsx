import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="Footer">
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}