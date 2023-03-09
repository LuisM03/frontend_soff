import IconEye from "./icons/icon_eye"
import IconEdit from "./icons/icon_edit"
import IconToggle from "./icons/icon_toggle"

export default function Tabla(props){

    const data = [
        {
            "id": "0001",
            "fecha_pedido": "21-11-2023 02:07 PM",
            "cantidad_ordenes": "8",
            "cliente": "Pepito Pérez",
            "direccion": "Cll 35 # 105 - 25",
            "telefono": "321 5698 2545",
            "domiciliario": "Jaider Cuartas",
            "estado": "activo"
        },
        {
            "id": "0002",
            "fecha_pedido": "21-11-2023 03:07 PM",
            "cantidad_ordenes": "12",
            "cliente": "Fulano Perensejo",
            "direccion": "Cll # 104 - 30",
            "telefono": "301 254 8923",
            "domiciliario": "Didier Castañeda",
            "estado": "inactivo"
        }
    ]

    return (
        <div className="max-w-[1400px] mx-auto sm:px-4" >
            <div className="">
            <table className="bg-white w-full h-[500px] relative">
                <tr className="bg-[#F8F8F8] h-11 w-[1200px] text-[13px] text-[#484848] text-left">
                    <th className="pl-5 min-w-[110px]"><h4>ID PEDIDO</h4></th>
                    <th className="w-[200px] ">  <h4>FECHA DE PEDIDO</h4></th>
                    <th className="w-[300px] pl-[8px]"><h4>CANTIDAD DE ORDENES</h4></th>
                    <th className="w-[210px] pl-[8px]"><h4>CLIENTE</h4></th>
                    <th className="w-[210px] pl-[8px]"><h4>DIRECCION</h4></th>
                    <th className="w-[210px] pl-[8px]"><h4>TELEFONO</h4></th>
                    <th className="w-[210px] pl-[8px]"><h4>DOMICILIARIO</h4></th>                   
                    <th className="w-[80px] pl-[8px]"><h4>ESTADO</h4></th>
                    <th className="w-[20%] text-right pr-[60px]" ><h4>ACCIONES</h4></th>
                </tr>
                {data.map(item => (
                <tr className="text-[14px] h-12 text-[#757575] text-left">

                        

                    <td className="pl-[18px] w-[11px]">{item.id}</td>
                    <td className="w-[300px] pl-[8px]"><p>{item.fecha_pedido}</p></td>
                    <td className="pl-[8px]"><p>{item.cantidad_ordenes}</p></td>
                    <td className="pl-[8px]"><p>{item.cliente}</p></td>
                    <td className="pl-[8px]"><p>{item.direccion}</p></td>
                    <td className="pl-[8px]"><p>{item.telefono}</p></td>
                    <td className="pl-[8px]"><p>{item.domiciliario}</p></td>
                    <td>

                    {
                        item.estado === "activo" ? (
                            <button className="bg-green-500 py-1 px-2 text-[#fff] rounded-[11px] font-medium w-[70px]">
                                Activo
                            </button>
                        ): (
                            <button className="bg-[#006FF1] py-1 px-2 text-[#fff] rounded-[11px] font-medium w-[70px] ">
                                Inactivo
                            </button>
                        )
                    }
                    </td>
                    
                    <td className=" text-right pr-[30px] flex justify-end"> 
                    <button className="border h-10 w-10 flex items-center justify-center rounded mr-2" >
                        <IconEdit />
                        </button>
                        <button className="border h-10 w-10 flex items-center justify-center rounded mr-2" >
                            <IconEye />
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