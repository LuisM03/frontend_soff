import Sidebar from "../components/sidebar/sidebar"
import Tabla from "../components/tablas/tabla"
import TablaProveedores from "../components/tablaproveedores"
import Filter from "../components/filter"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"

export default function Providers(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Proveedores" />
            <Filter name="Agregar proveedor" modulo="proveedores"/>
            <TablaProveedores/>
            <Footer />
          </div> 
        </div>
    )
}