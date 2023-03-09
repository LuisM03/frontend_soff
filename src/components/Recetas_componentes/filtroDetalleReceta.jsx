export default function FiltroDetalleReceta(){
    return(
        <div className="flex flex-col w-full p-3">
            <form className="flex">
                <div className="flex">
                    <input type="text"  placeholder="Nombre"
                    className="text-[12px] w-full flex p-4 pr-10 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                    rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%] font-semibold"/>
                    <input type="text"  placeholder="Categoría"
                    className="text-[12px] w-full flex p-4 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                    rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%] font-semibold"/>
                </div>
                </form>
        <form action="">
        <div className="flex ">
                <div className="flex p-4 items-center text-[#757575] bg-[#F8F8F8] rounded h-12 
                border border-solid border-1 border-[#00000] border-opacity-[50%] font-semibold">
                        <select className="bg-[#F8F8F8] text-[13px] w-full">
                            <option hidden selected>Insumo</option>
                            <option className="text-[14px]">Lechuga</option>
                            <option className="text-[14px]">Alas</option>
                            <option className="text-[14px]">Papas</option>
                        </select>
                    </div>
                    {/* <div className="flex items-center pt-8 text-[#000000] opacity-[70%] font-semibold pt-5 pb-2">

                        </div> */}
                    {/* <div className="flex items-center"> */}
                        <input type="text"  placeholder="Cantidad" 
                            className="text-[12px] w-full flex p-4 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                            rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%]"/>
                        <input type="text"  placeholder="Medida"
                            className="text-[12px] ml-6 w-full flex pt-1 pl-5 pr- items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                            rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%]"/>
                        {/* </div> */}
                
            <div className=" p-4 flex ml-4 bg-[#0453F4] text-white rounded h-12">
                <button className="flex items-center">
                    <label></label>
                </button> 
            </div>
            </div>
            </form>
            </div>
    
    )
}