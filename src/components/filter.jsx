import "./styles/style-filter.css"
import Lupa from "./icons/lupa"
import Vector from "./icons/vector"
import Flechabaja from "./icons/flecha-abajo"
import Flechaizquierda from "./icons/flecha-izquierda"

export default function Filter(){
    return(
        <div className="flex w-full p-3">
            <form className="flex">
                <div className="flex filtro p-4 items-center">
                    <Lupa/>
                    <input id="" type="text" placeholder="Filtrar busqueda..." className="ml-2"/>
                </div>

                <div className="flex filtro p-4 items-center ml-4">
                    <Vector/>
                    <input id="" type="text" placeholder="Ordenar por" className="ml-2"/>
                    <Flechabaja/>
                </div>
            </form>

            <div className="reporte p-4 flex items-center ml-4">
                <button>Generar reporte de ventas</button>
            </div>

            <div className="boton p-4 flex ml-auto">
                <button className="flex items-center">
                    <Flechaizquierda/>
                    <p className="ml-2">Regresar a vender</p>
                </button> 
            </div>
        </div>
    )
}

