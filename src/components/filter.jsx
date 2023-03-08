import Lupa from "./icons/lupa"
import Vector from "./icons/vector"
import Flechaizquierda from "./icons/flecha-izquierda"

export default function Filter(props){
    return(
        <div className="flex max-w-[1200px] mx-auto mb-4">
            <form className="flex">
                <div className="flex p-4 items-center text-[#757575] rounded h-12 border border-solid border-[#757575] bg-[#F8F8F8]">
                    <Lupa/>
                    <input id="" type="text"  placeholder="Filtrar busqueda..." className="ml-2 bg-[#F8F8F8]"/>
                </div>

                <div className="flex p-4 items-center ml-4 text-[#757575] rounded h-12 border border-solid border-[#757575] bg-[#F8F8F8]">
                    <Vector/>
                    <button className="flex items-center">
                        <label className="ml-2 hover:text-black">Ordenar por</label>
                    </button> 
                </div>
            </form>

            <div className="p-4 flex items-center ml-4 text-[#0453F4] rounded h-12 border border-solid border-1 border-[#0453F4] bg-white">
                <button>Generar reporte de {props.modulo}</button>
            </div>

            <div className="p-4 flex ml-auto bg-[#0453F4] text-white rounded h-12">
                <button className="flex items-center">
                    <Flechaizquierda/>
                    <label className="ml-2">{props.name}</label>
                </button> 
            </div>
        </div>
    )
}

