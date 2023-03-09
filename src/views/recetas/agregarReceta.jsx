import Filter from "../../components/filter"
import Sidebar from "../../components/sidebar/sidebar"
import Cabecera from "../../components/cabecera"
import Cuerpo from "../../components/cuerpo"
import TablaRecetas from "../../components/tablas/tablaRecetas"
import Footer from "../../components/login_components/footer_login"
import FiltroDetalleReceta from "../../components/Recetas_componentes/filtroDetalleReceta"

export default function AddReceta(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
        <Sidebar />
        <div className="w-full relative ml-16">
          <Cabecera/>
          <Cuerpo modulo="Recetas" />
          <FiltroDetalleReceta/>
          <TablaRecetas/>
          <Footer />
        </div> 
      </div>
    )
}