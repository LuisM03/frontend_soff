import Sidebar from "../components/sidebar/sidebar"
import Tabla from "../components/tabla"
import Filter from "../components/filter"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"

export default function Providers(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="inline-block w-full relative ">
            <Cabecera username="José Luis" lastname="Guzman"/>
            <Cuerpo modulo="Proveedores" />
            <Filter name="Agregar proveedor" modulo="proveedores"/>
            <Tabla/>
            <Footer />
          </div> 
        </div>
    )
}