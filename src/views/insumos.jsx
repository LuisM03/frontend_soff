import Sidebar from "../components/sidebar/sidebar"
import Cabecera from "../components/cabecera"

export default function Insumo(){
    return (
        <div >
          <div className="flex">
            <Sidebar /> 
            <Cabecera /> 
            </div>
        </div>
    )
}