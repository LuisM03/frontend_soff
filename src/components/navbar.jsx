import { Link } from "react-router-dom"
import "./styles/style-cabecera.css"
export default function Navbar(){
    return(
        <div className="caja">
            <Link to="/insumos">insumos</Link>
            <Link to="/pedidos">pedidos</Link>
            <Link to="/ventas">ventas</Link>
            <Link to="/compras">compras</Link>
            <Link to="/usuarios">usuario</Link>
            <Link to="/productos">productos</Link>
            <Link to="/recetas">recetas</Link>
            <Link to="/providers">providers</Link>
        </div>
    )
}