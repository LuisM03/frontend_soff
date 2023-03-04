// import { Link } from "react-router-dom"
// import "./styles/style-plantilla.css"
import Botonc from"./icons/botonc"
import Ojo from"./icons/ojo"

export default function Tabla(){

    return (
        <div className=" h-auto w-full " >
            {/* <Navbar/> */}
            <div className="">
            <table className="w-full h-full ">
                <tr className="bg-gray-200 h-11 w-[1200px] text-[9px] text-left ">

                    <th className="pl-[18px] w-[150px]"><h4>ID VENTAS</h4></th>
                    <th><h4>VENDEDOR</h4></th>
                    <th><h4>CANIDAD DE ORDENES</h4></th>
                    <th><h4>FECHA DE VENTA</h4></th>
                    <th><h4>METODO DE PAGO</h4></th>
                    <th><h4>TOTAL</h4></th>                   
                    <th><h4>ESTADO</h4></th>
                    <th className="w-[20%] text-right pr-[60px]" >Acciones</th>

                </tr>

                <tr className="h-[50px] text-[12px] text-[#757575] text-left">

                    <th className="pl-[18px] w-[11px]">011</th>
                    <th ><p>Ximena Arrieta</p></th>
                    <th><p>23</p></th>
                    <th><p>21-11-2022 02:07 AM</p></th>
                    <th><p>Transferencia</p></th>
                    <th><p>$56.000</p></th>
                    <th>
                        <button className="bg-[#4CAF50] w-[48px] h-[15px] text-[10px] text-[#fff] rounded-[11px] font-medium ">
                        Activo
                        </button>
                    </th>
                    
                    <th className="w-[20%] text-right pr-[30px] "> 
                        <button className="border p-2 rounded mr-2" >
                            <Ojo/>
                        </button>
                        <button className="border p-2 rounded " >
                            <Botonc/>
                        </button>
                    </th>

                </tr>

                <tr className="h-[50px] text-[12px] text-[#757575] text-left">

                    <th className="pl-[18px] w-[11px]">011</th>
                    <th ><p>Ximena Arrieta</p></th>
                    <th><p>23</p></th>
                    <th><p>21-11-2022 02:07 AM</p></th>
                    <th><p>Transferencia</p></th>
                    <th><p>$56.000</p></th>
                    <th>
                        <button className="bg-[#006FF1] w-[48px] h-[15px] text-[10px] text-[#fff] rounded-[11px] font-medium ">
                        Inactivo
                        </button>
                    </th>
                    
                    <th className="w-[20%] text-right pr-[30px] "> 
                        <button className="border p-2 rounded mr-2" >
                            <Ojo/>
                        </button>
                        <button className="border p-2 rounded " >
                            <Botonc/>
                        </button>
                    </th>

                </tr>
                
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