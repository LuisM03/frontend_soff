// import { Link } from "react-router-dom"
import "./styles/style-plantilla.css"
import Botonc from"./icons/botonc"
import Ojo from"./icons/ojo"
export default function Tabla(){
    return (
        <div>
            {/* <Navbar/> */}
            <div class="subcuer">
            <table>
                <tr class="titulos">
                    <th class="t1"><h4>ID VENTAS</h4></th>
                    <th><h4>VENDEDOR</h4></th>
                    <th class="t3"><h4>CANIDAD DE ORDENES</h4></th>
                    <th><h4>FECHA DE VENTA</h4></th>
                    <th><h4>METODO DE PAGO</h4></th>
                    <th><h4>TOTAL</h4></th>                   
                    <th><h4>ESTADO</h4></th>
                    <th class="t8">Acciones</th>
                </tr>
                <tr class="info">
                    <th class="i1">011</th>
                    <th><p>Ximena Arrieta</p></th>
                    <th class="i3" ><p>23</p></th>
                    <th><p>21-11-2022 02:07 AM</p></th>
                    <th><p>Transferencia</p></th>
                    <th><p>$56.000</p></th>
                    <th><button class="btnestado">Activo</button></th>
                    <th class="acciones"> 
                        <button className="border p-2 rounded mr-2" >
                            <Ojo/>
                        </button>
                        <button className="border p-2 rounded " >
                            <Botonc/>
                        </button>
                    </th>
                </tr>
                <tr class="info">
                    <th class="i1">011</th>
                    <th><p>Ximena Arrieta</p></th>
                    <th class="i3" ><p>23</p></th>
                    <th><p>21-11-2022 02:07 AM</p></th>
                    <th><p>Transferencia</p></th>
                    <th><p>$56.000</p></th>
                    <th><button class="btnestado2">Inactivo</button></th>
                    <th class="acciones"> 
                    
                    
                    <button className="border p-2 rounded mr-2" >
                        <Ojo/>
                    </button>
                    <button className="border p-2 rounded" >
                        <Botonc/>
                    </button>
                    


                    </th>
                    {/* <th class="i8"><Boton/>  <Ojo/> </th> */}
                </tr>
                
            <div class="barrabaja">
                <p calss="bajatex">Mostrando 1 a 10 de 100 resultados</p>
                <div class="paginado">
                    <button>←</button>
                    <button class="bp2">1</button>
                    <button>2</button>
                    <button>...</button>
                    <button>9</button>
                    <button>10</button>
                    <button>→</button>
                </div>
            </div>
            </table>
            </div>
         

        
        </div>
    )
}