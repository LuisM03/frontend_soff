import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <Link to="/ventas">ventas</Link>
            <Link to="/productos">productos</Link>
            <Link to="/recetas">recetas</Link>
        </div>
    )
}