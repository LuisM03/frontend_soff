import Navbar from "../components/navbar"
import Cuerpo from "../components/cuerpo"

export default function Pedido(){
    return (
        <div>  
          <div className="flex">
            <Navbar /> 
            <h1>Bienvenido a modulo pedidos</h1>
            <div>
              <Cuerpo /> 
            </div>
          </div>
        </div>
    )
}