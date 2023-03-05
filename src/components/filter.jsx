import Lupa from "./icons/lupa"
import Vector from "./icons/vector"
import Flechaizquierda from "./icons/flecha-izquierda"

export default function Filter(props){
    return(
        <div className="flex w-full p-3">
            <form className="flex">
                <div className="flex p-4 items-center text-[#757575] rounded h-12 border border-solid border-1 border-[#757575]">
                    <Lupa/>
                    <input id="" type="text"  placeholder="Filtrar busqueda..." className="ml-2"/>
                </div>

                <div className="flex p-4 items-center ml-4 text-[#757575] rounded h-12 border border-solid border-1 border-[#757575]">
                    <Vector/>
                    <label className="ml-2">Ordenar por</label>
                    <select name="" id="">
                        <option value="">Fecha</option>
                        <option value="">N° de ordenes</option>
                        <option value="">Estado</option>
                    </select>
                </div>
            </form>

            <div className="p-4 flex items-center ml-4 text-[#0453F4] rounded h-12 border border-solid border-1 border-[#0453F4]">
                <button>Generar reporte de {props.modulo}</button>
            </div>

            <div className=" p-4 flex ml-auto bg-[#0453F4] text-white rounded h-12">
                <button className="flex items-center">
                    <Flechaizquierda/>
                    <label className="ml-2">{props.boton_agregar}</label>
                </button> 
            </div>
        </div>
    )
}

