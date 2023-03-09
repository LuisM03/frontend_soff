import IconEdit from "./icons/icon_edit"
import IconToggle from "./icons/icon_toggle"

export default function TablaOrder(props){

    const data = [
        {
            "numorden": "0001",
            "insumo": "Papas",
            "cantidad": 2,
            "precio_unitario": "$22.000",
            "subtotal": "$44.000",
        },
        {
            "numorden": "0002",
            "insumo": "Salchichas",
            "cantidad": 2,
            "precio_unitario": "$22.000",
            "subtotal": "$44.000",
        }
        
    ]

    return (
        <div className="max-w-[1400px] mx-auto sm:px-4" >
        <div className="">
        <table className="bg-white w-full h-[500px] relative">
            <tr className="bg-[#F8F8F8] h-11 w-[1200px] text-[13px] text-[#484848] text-left">
                <th className="pl-4 min-w-[150px]"><h4>N° ORDEN</h4></th>
                <th><h4>INSUMO</h4></th>
                <th><h4>CANTIDAD</h4></th>
                <th className="w-[200px]"><h4>PRECIO UNITARIO</h4></th>
                <th className="w-[180px]"><h4>SUBTOTAL</h4></th>
                <th className="w-[20%] text-right pr-[60px]" ><h4>ACCIONES</h4></th>
            </tr>
            {data.map(item => (
            <tr className="text-[14px] h-12 text-[#757575] text-left">

                    

                <td className="pl-[18px] w-[11px]">{item.numorden}</td>
                <td ><p>{item.insumo}</p></td>
                <td><p>{item.cantidad}</p></td>
                <td><p>{item.precio_unitario}</p></td>
                <td><p>{item.subtotal}</p></td>
                
                <td className=" text-right pr-[30px] flex justify-end"> 
                    <button className="border h-10 w-10 flex items-center justify-center rounded mr-2" >
                        <IconEdit />
                    </button>
                    <button className="border h-10 w-10 flex items-center justify-center rounded mr-2" >
                    <IconToggle />
                    </button>
                </td>

            </tr>
            ))}
   
        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[#F8F8F8] flex justify-between items-center text-[#757575] ">
            <p className="ml-[30px] text-[12px]">Mostrando 1 a 10 de 100 resultados</p>
            <div className="mr-[20px] border-[0.5px] border-[#C6C6C6] rounded-[5px] text[11px]">
                <button className="w-[28px] h-[28px] ">←</button>
                <button className="w-[28px] h-[28px] border-[1px] border-[#0453F4] bg-[#C7DAFF] text-[#0453F4]">1</button>
                <button className="w-[28px] h-[28px] border-r-[0.5px] border-[#C6C6C6]">2</button>
                <button className="w-[28px] h-[28px] border-r-[0.5px] border-[#C6C6C6]">...</button>
                <button className="w-[28px] h-[28px] border-r-[0.5px] border-[#C6C6C6]">9</button>
                <button className="w-[28px] h-[28px] border-r-[0.5px] border-[#C6C6C6]">10</button>
                <button className="w-[28px] h-[28px]">→</button>
            </div>
        </div>
        </table>
        </div>
    </div>
    )
}