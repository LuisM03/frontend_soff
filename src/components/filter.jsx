import Lupa from "./icons/lupa"
import Vector from "./icons/vector"

export default function Filter(props){

  

    return(
        <div>
            <div className="flex items-center max-w-[1400px] mx-auto sm:px-4 mb-10">
                <form className="flex">
                    <div className="flex px-4 py-2 items-center text-[#757575] rounded border bg-[#F8F8F8]">
                        <Lupa/>
                        <input id="" type="text"  placeholder="Filtrar busqueda..." className="outline-0 ml-2 bg-[#F8F8F8] h-full"/>
                    </div>

                    <div className="flex px-4 py-2 items-center ml-4 text-[#757575] rounded  border bg-[#F8F8F8]">
                        <Vector/>
                        <button className="flex items-center">
                            <label className="ml-2 hover:text-black">Ordenar por</label>
                        </button> 
                    </div>
                </form>

                <div className="px-4 py-2 flex items-center ml-4 text-[#0453F4] rounded border border-solid border-1 border-[#0453F4] bg-white">
                    <button>Generar reporte de {props.modulo}</button>
                </div>
                <div className=" py-2 px-4 flex ml-auto bg-[#0453F4] text-white rounded">
                    <button className="flex items-center " onClick={props.activeModal}>
                        <p>
                            {props.name}
                        </p>
                    </button>
                </div>
                
            </div>
        </div>
        
    )
}

