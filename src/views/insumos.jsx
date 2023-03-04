import Navbar from "../components/navbar"
import Cabecera from "../components/cabecera"

export default function Insumo(){
    return (
        <div >
          <div className="flex">
            <Navbar /> 
            <h1>Bienvenido al modulo insumos</h1>
            <div>
              <Navbar /> 
              <Cabecera /> 
            </div>
        </div>
    )
}