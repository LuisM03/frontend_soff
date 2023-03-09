import Sidebar from "../components/sidebar/sidebar"
import TablaPedidos from "../components/tablaPedidos"
import Filter from "../components/filter"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"

export default function Pedidos(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Pedidos" />
            <Filter name="Agregar Pedido" modulo="Pedidos"/>
            <TablaPedidos/>
            <Footer />
          </div> 
        </div>
    )
}
