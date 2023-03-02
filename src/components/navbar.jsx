import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <Link to="/ventas">ventas</Link>
            <Link to="/providers">providers</Link>
        </div>
    )
}