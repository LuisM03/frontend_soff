import Sidebar from "../components/sidebar/sidebar"
import TablaInsumos from "../components/tablaInsumos"
import Filter from "../components/filter"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"

export default function Insumos(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Insumos" />
            <Filter name="Agregar Insumo" modulo="insumos"/>
            <TablaInsumos/>
            <Footer />
          </div> 
        </div>
    )
}
