import Sidebar from "../../components/sidebar/sidebar"
import Cabecera from "../../components/cabecera"
import Cuerpo from "../../components/cuerpo"
import TablaRecetas from "../../components/tablas/tablaRecetas"
import Footer from "../../components/login_components/footer_login"
import UpdateRece from "../../components/Recetas_componentes/Update"
import FiltroReceta from "../../components/Recetas_componentes/filtroRecetas"

// import { useState } from "react"
// import Modal from "../components/modal"

// export default function Compras(){
//   const [active, setActive] = useState(false)

//     const toggle = () => {
//         setActive(!active)
//     }
// }
export default function Receta(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
        <Sidebar />
        <div className="w-full relative ml-16">
          <Cabecera/>
          <Cuerpo modulo="Recetas" />
          <FiltroReceta name="Agregar receta" modulo="Recetas" action={()=>{window.location.href = "/addRecipe"}}/>
          <TablaRecetas/>
          <UpdateRece 
              title="Actualizar detalle de insumo" 
              text="Ingrese la nueva información que desea actualizar para la receta." 
              campo1="Nombre" campo2="Categoría" campo3="Insumo" campo4="Cantidad" campo5="Medida" 
              input1="Alas combo 1" input2="Alas" input3="6" input4="Unds"
              selectInsumo="Alas" selectInsumo1="Arepa" selectInsumo2="Lechuga" selectInsumo3="Papas"
              boton="Actualizar"/>
          <Footer />
        </div> 
      </div>
    )
}