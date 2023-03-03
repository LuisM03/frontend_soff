import Lupa from "./icons/lupa"
import Vector from "./icons/vector"
import Flechabaja from "./icons/flecha-abajo"
import Flechaizquierda from "./icons/flecha-izquierda"

export default function Filter(){
    return(
        <div className="flex w-full p-3">
            <form className="flex">
                <div className="flex filtro p-4 items-center text-[#757575] rounded h-12 border border-solid border-1 border-[#757575]">
                    <Lupa/>
                    <input id="" type="text"  placeholder="Filtrar busqueda..." className="ml-2"/>
                </div>

                <div className="flex filtro p-4 items-center ml-4 text-[#757575] rounded h-12 border border-solid border-1 border-[#757575]">
                    <Vector/>
                    <input id="" type="text" placeholder="Ordenar por" className="ml-2"/>
                    <Flechabaja/>
                </div>
            </form>

            <div className="p-4 flex items-center ml-4 text-[#0453F4] rounded h-12 border border-solid border-1 border-[#0453F4]">
                <button>Generar reporte de ventas</button>
            </div>

            <div className=" p-4 flex ml-auto bg-[#0453F4] text-white rounded h-12">
                <button className="flex items-center">
                    <Flechaizquierda/>
                    <label className="ml-2">Regresar a vender</label>
                </button> 
            </div>
        </div>
    )
}

