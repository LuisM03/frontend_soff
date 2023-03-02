import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        //rutas/path del documento routes
        <div>
            <Link to="/ventas">ventas</Link><br />
            <Link to="/insumos">insumos</Link><br />
            <Link to="/pedidos">pedidos</Link><br />
            
        </div>
        
    )
}