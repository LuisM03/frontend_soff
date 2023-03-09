import IconEye from "./icons/icon_eye"
import IconToggle from "./icons/icon_toggle"

export default function TablaOrderCompra(props){

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
        <table className="bg-white w-full h-[200px] relative">
            <tr className="bg-[#F8F8F8] h-11 w-[1200px] text-[13px] text-[#484848] text-left">
                <th className="pl-4 min-w-[150px]"><h4>N° ORDEN</h4></th>
                <th><h4>INSUMO</h4></th>
                <th><h4>CANTIDAD</h4></th>
                <th><h4>PRECIO UNITARIO</h4></th>
                <th><h4>SUBTOTAL</h4></th>
            </tr>
            {data.map(item => (
            <tr className="text-[14px] h-12 text-[#757575] text-left">

                <td className="pl-[18px] w-[11px]">{item.numorden}</td>
                <td ><p>{item.insumo}</p></td>
                <td><p>{item.cantidad}</p></td>
                <td><p>{item.precio_unitario}</p></td>
                <td><p>{item.subtotal}</p></td>
                
            </tr>
            ))}
        </table>
        </div>
    </div>
    )
}