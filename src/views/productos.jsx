// import Navbar from "../components/navbar"
import Cabecera from "../components/cabecera"
import Cuerpo from "../components/cuerpo"
import Filter from "../components/filter"
import Order from "../components/order"
import Tabla from "../components/tabla"

export default function Producto(){
    return (
        <div>
             {/* <Navbar/> */}
            <div>
                <Cabecera/>
            </div>
            <div>
                <Cuerpo/>
            </div>
            <div>
                <Filter/>
            </div>
            <div>
                <Tabla  cant_ordenes="10" fecha="10-11-"/>
            </div>
            <div>
                <Order/>
            </div>
           
        </div>
    )
}