import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex items-center">
            <Link to="/ventas">ventas</Link><br />
            <Link to="/insumos">insumos</Link><br />
            <Link to="/pedidos">pedidos</Link><br />
            <Link to="/ventas">ventas</Link>
            <Link to="/compras">compras</Link>
            <Link to="/usuarios">usuario</Link>
            <Link to="/productos">productos</Link>
            <Link to="/recetas">recetas</Link>
            <Link to="/providers">providers</Link>
        </div>
        
    )
}