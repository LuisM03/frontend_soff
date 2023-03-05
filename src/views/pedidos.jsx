import Sidebar from "../components/sidebar/sidebar"
import Cuerpo from "../components/cuerpo"

export default function Pedido(){
    return (
        <div>  
          <div className="flex">
            <Sidebar /> 
            <h1>Bienvenido a modulo pedidos</h1>
            <div>
                {/* <Navbar />  */}
                <Cuerpo /> 
            </div>
              <Cuerpo /> 
          </div>
        </div>
    )
}