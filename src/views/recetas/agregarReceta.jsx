import Sidebar from "../../components/sidebar/sidebar"
import Cabecera from "../../components/cabecera"
import Cuerpo from "../../components/cuerpo"
import Footer from "../../components/login_components/footer_login"
import FiltroDetalleReceta from "../../components/Recetas_componentes/filtroDetalleReceta"
import TablaDetalleReceta from "../../components/tablas/tablaDetalleReceta"
import FacturaDetalleReceta from "../../components/Recetas_componentes/facturaDetalleReceta"

export default function AddReceta(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Recetas" />
            <div className="flex">
                <div className="w-[70%] ml-16">
                  <FiltroDetalleReceta/>
                  <TablaDetalleReceta/>
                </div>
                <div className="w-[20%] h-[20%] mt-[150px]">
                  <FacturaDetalleReceta />
                </div>
            </div>
            <Footer />
          </div> 
      </div>
    )
}