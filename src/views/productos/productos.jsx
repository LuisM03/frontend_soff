import Sidebar from "../../components/sidebar/sidebar"
import Cabecera from "../../components/cabecera"
import Cuerpo from "../../components/cuerpo"
import Filter from "../../components/filter"
import Footer from "../../components/login_components/footer_login"
import TablaProductos from "../../components/tablas/tablaProductos"
import Registro from "../../components/registro"

export default function Producto(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
        <Sidebar />
        <div className="w-full relative ml-16">
          <Cabecera/>
          <Cuerpo modulo="Productos" />
          <Filter name="Agregar producto" modulo="productos"/>
          <TablaProductos/>
          <Registro/>
          <Footer />
        </div> 
      </div>
    )
}