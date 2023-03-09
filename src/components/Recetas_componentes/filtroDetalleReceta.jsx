export default function FiltroDetalleReceta(){
    return(
        <div className="fflex items-center max-w-[1400px] mx-auto sm:px-4 mb-10 ">
            <form className="flex">
                <div className="flex pb-3">
                    <input type="text"  placeholder="Nombre"
                    className=" w-full flex p-4 pr-10 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                    rounded h-12 border border-solid border-1 border-[#757575] "/>
                    <input type="text"  placeholder="Categoría"
                    className=" w-full flex p-4 ml-6 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                    rounded h-12 border border-solid border-1 border-[#757575]"/>
                </div>
            </form>
            <form action="">
                <div className="flex ">
                    <div className=" w-[252px] flex p-4 pr-10 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                            rounded h-12 border border-solid border-1 border-[#757575] ">
                            <select className="bg-[#F8F8F8] text-[#757575]  w-full">
                                <option hidden selected>Insumo</option>
                                <option className="text-[14px]">Lechuga</option>
                                <option className="text-[14px]">Alas</option>
                                <option className="text-[14px]">Papas</option>
                            </select>
                        </div>
                            <div className="flex items-center">
                            <input type="text"  placeholder="Cantidad" 
                                className=" w-[150px] flex p-4 ml-6  pr-10 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                                rounded h-12 border border-solid border-1 border-[#757575] "/>
                            <input type="text"  placeholder="Medida"
                                className=" ml-6 w-[150px] flex pl-5  items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                                rounded h-12 border border-solid border-1 border-[#757575] "/>
                                </div>
                        
                    <div className=" p-4 flex ml-4 bg-[#0453F4] text-white rounded h-12">
                        <button className="flex items-center">
                            <label>Agregar insumo</label>
                        </button> 
                    </div>
                </div>
            </form>
        </div>
    
    )
}