export default function FacturaDetalleReceta(props){
    return (
        <div className="bg-white w-full flex flex-col justify-between h-[70%]">
            <div className="">
                <div className="text-center w-full flex flex-col py-5">
                    <h1 className="font-bold text-[22px]">ALAS COMOBO 1</h1>
                </div>
                <hr className="my-"/>
                <div className="text-center w-full flex flex-col py-5">
                    <h1 className="font-bold text-[14px]">INSUMOS</h1>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between px-4 pt-5 pl-14 pr-14">
                        <p className="font-semibold">Alas</p>
                        <p>6 Und</p>
                    </div>
                    <div className="flex justify-between px-4 pt-5 pl-14 pr-14">
                        <p className="font-semibold">Papas</p>
                        <p>30 Kg</p>
                    </div>
                    <div className="flex justify-between px-4 pt-5 pl-14 pr-14">
                        <p className="font-semibold">Arepa</p>
                        <p>1 Und</p>
                    </div>
                    <hr className="my-5"/>
                </div>
                <div className="px-4 py-4  ">
                    <button className="flex items-center w-full justify-center mt-[116px] py-2 px-4 flex ml-auto bg-[#0453F4] text-white rounded" onClick={props.action}>
                        Registrar receta
                    </button>
                </div>
            </div>
        </div>
    )
}