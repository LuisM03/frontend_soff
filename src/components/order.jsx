export default function Order(props){
    return(
        <div className="flex items-center max-w-[1400px] mx-auto sm:px-4 mb-10">
            <form className="flex">
                <div className="flex p-4 items-center text-[#757575] rounded h-12 border border-solid border-1 border-[#757575] bg-[#F8F8F8]"> 
                    <select id="" name="" className="bg-[#F8F8F8]">
                        <option hidden selected>Proveedor</option>
                        <option value="">S.A.S CARNE</option>
                        <option value="">Postobon</option>
                        <option value="">PAN-JULIAN</option>
                    </select>
                </div>

                <div className="flex p-4 items-center ml-4 text-[#757575] rounded h-12 border border-solid border-1 border-[#757575] bg-[#F8F8F8]">
                    <select id="" name="" className="bg-[#F8F8F8]">
                        <option hidden selected>Insumo</option>
                        <option value="">Salchicha</option>
                        <option value="">Papas</option>
                        <option value="">Pollo</option>
                    </select>
                </div>
                <div className="flex p-4 items-center text-[#757575] rounded h-12 border border-solid border-1 border-[#757575] ml-4 bg-[#F8F8F8]">
                    <input id="" type="text"  placeholder="Cantidad" className="bg-[#F8F8F8]"/>
                </div>
            </form>

            <div className="p-4 flex ml-4 bg-[#0453F4] text-white rounded h-12 m-auto">
                <button className="flex items-center">
                    <label>{props.name}</label>
                </button> 
            </div>
        </div>
    )
}
