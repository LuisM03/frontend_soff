import IconEdit from "../icons/icon_edit"
import IconEye from "../icons/icon_eye"
import IconToggle from "../icons/icon_toggle"


export default function TablaUsuario(){
    const data = [
        {
            "id": "0001",
            "documento": "2459274943",
            "nombre": "Pepito Pérez",
            "email": "pepitoperez@man.com",
            "rol": "Empleado",
            "estado": "activo"
        },
        {
            "id": "0002",
            "documento": "1077383648",
            "nombre": "Fulano Perensejo",
            "email": "fulano@pero.com",
            "rol": "Administrador",
            "estado": "activo"
        }
    ]
    return (
        <div className="max-w-[1400px] mx-auto sm:px-4" >
            <div className="">
            <table className="bg-white w-full h-[500px] relative">
                <tr className="bg-[#F8F8F8] h-11 w-[1200px] text-[13px] text-[#484848] text-left">
                    <th className="pl-5 min-w-[110px]"><h4>DOCUMENTO</h4></th>
                    <th className="w-[200px] ">  <h4>NOMBRE</h4></th>
                    <th className="w-[300px] pl-[8px]"><h4>EMAIL</h4></th>
                    <th className="w-[210px] pl-[8px]"><h4>ROL</h4></th>                
                    <th className="w-[80px] pl-[8px]"><h4>ESTADO</h4></th>
                    <th className="w-[20%] text-right pr-[60px]" ><h4>ACCIONES</h4></th>
                </tr>
                {data.map(item => (
                <tr className="text-[14px] h-12 text-[#757575] text-left">
                    <td className="pl-[18px]">{item.documento}</td>
                    <td className="pl-[8px]"><p>{item.nombre}</p></td>
                    <td className="pl-[8px]"><p>{item.email}</p></td>
                    <td className="pl-[8px]"><p>{item.rol}</p></td>
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