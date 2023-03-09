import Sidebar from "../components/sidebar/sidebar"
import Order from "../components/order"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"
import TablaOrder from "../components/tablas/tablaOrder"

export default function Addcompras(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Ordenes" />
            <div className="flex">
              <div className="w-[60%] ml-16">
              <Order name="Agregar Insumo"/>
              <TablaOrder/>
              </div>
              <div >
                <p>FACTURA</p>
              </div>
            </div>
            <Footer />
          </div> 
        </div>
    )
}