export default function Factura(props){
    return (
        <div className="bg-white w-full flex flex-col justify-between h-full">
            <div className="">
                <div className="text-center w-full flex flex-col py-5">
                    <h1 className="font-bold">MANDISA</h1>
                    <p className="text-[#808080] text-[12px]">NIT 71227771-4</p>
                    <p className="text-[#808080] text-[12px]">Diagonal 57 #20-27, Navarra/Bello</p>
                    <p className="text-[#808080] text-[12px]">(+57) 3146486791</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between px-4 pt-5">
                        <p className="font-semibold">Subtotal</p>
                        <p>{props.subtotal}</p>
                    </div>
                    <hr className="my-5"/>
                    <div className="text-center">
                        <h1 className="font-bold text-[30px]">$88.000</h1>
                        <p>Total de {props.modulo}</p>
                    </div>
                    <hr className="my-5"/>
                    <div>
                        <div className="flex justify-between px-4">
                            <p className="font-semibold">{props.users}</p>
                            <p>{props.name}</p>
                        </div>
                        <div className="flex justify-between px-4">
                            <p className="font-semibold">Fecha de {props.modulo}</p>
                            <p>06/12/2022</p>
                        </div>
                    </div>
                    <hr className="my-5"/>
                </div>
                <div className="px-4 py-4  my-auto">
                    <button className="flex items-center w-full py-2 px-4 flex ml-auto bg-[#0453F4] text-white rounded">
                        Realizar {props.modulo}
                    </button>
                </div>
            </div>
        </div>
    )
}