import Sidebar from "../components/sidebar/sidebar"
import Order from "../components/order"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"
import TablaOrder from "../components/tablas/tablaOrder"
import Factura from "../components/factura"

export default function Addcompras(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Ordenes" />
            <div className="flex">
              <div className="w-[70%] ml-16">
                <Order name="Agregar Insumo"/>
                <TablaOrder/>
              </div>
              <div className="w-[20%]">
                <Factura subtotal="$88.000" modulo="compra" users="Proveedor" name="VERDU-HIT"/>
              </div>
            </div>
            <Footer />
          </div> 
        </div>
    )
}