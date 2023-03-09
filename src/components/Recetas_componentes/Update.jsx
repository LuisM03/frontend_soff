export default function UpdateRece(props){
    return(
        <div className="flex items-center sm:px-4 mb-10">
            <form className="">
                <div className=" items-center text-[#484848]  rounded border bg-[white] w-[422px] p-8">
                    <h1 className="text-[#484848] text-[16px] font-semibold pb-4">{props.title}</h1>
                    <p className="text-[#687990] pb-7 text-[12px]">{props.text}</p>
                    <div className="text-[#000000] opacity-[70%] font-semibold pb-2">
                         <p >{props.campo1}</p>
                    </div>
                    <input type="text"  placeholder={props.input1} 
                    className="text-[12px] w-full flex p-4 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                    rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%]"/>

                     <div className="text-[#000000] opacity-[70%] font-semibold pt-5 pb-2">
                         <p>{props.campo2}</p>
                    </div>
                    <input type="text"  placeholder={props.input2} 
                    className="text-[12px] w-full flex p-4 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                    rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%]"/>

                     <div className="text-[#000000] opacity-[70%] font-semibold pt-5 pb-2">
                         <p>{props.campo3}</p>
                    </div>
                    <div className="flex p-4 items-center text-[#757575] bg-[#F8F8F8] rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%] ">
                        <select className="bg-[#F8F8F8] text-[12px] w-full">
                            <option hidden selected>{props.selectInsumo}</option>
                            <option className="text-[14px]">{props.selectInsumo1}</option>
                            <option className="text-[14px]">{props.selectInsumo2}</option>
                            <option className="text-[14px]">{props.selectInsumo3}</option>
                        </select>
                    </div>
                   
                    <div className="flex items-center pt-8 text-[#000000] opacity-[70%] font-semibold pt-5 pb-2">
                            <p className="w-full">{props.campo4}</p>
                            <p className="w-full pl-6">{props.campo5}</p>
                        </div>
                    <div className="flex items-center">
                        <input type="text"  placeholder={props.input3} 
                            className="text-[12px] w-full flex p-4 items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                            rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%]"/>
                        <input type="text"  placeholder={props.input4} 
                            className="text-[12px] ml-6 w-full flex pt-1 pl-5 pr- items-center placeholder:text-[#757575] bg-[#F8F8F8] 
                            rounded h-12 border border-solid border-1 border-[#00000] border-opacity-[50%]"/>
                        </div>
                   

                    
                    <div className="flex items-center pt-8">
            
                            <button className="flex items-center py-3 px-5 flex ml-4 bg-[#0453F4] text-white rounded border border-solid border-1 border-[#00000] border-opacity-[50%] ">
                                <p className="ml-5 mr-5">
                                    {props.boton}
                                </p>
                            </button>
            
                            <button className="flex items-center py-3 px-5 flex mr-3 ml-5 bg-[#ffffff] text-[#757575] rounded border border-solid border-1 border-[#00000] border-opacity-[50%]">
                                <p className="ml-5 mr-5">
                                    Cancelar
                                </p>
                            </button>
                    </div>
                </div>
            </form>
        </div>
    )}