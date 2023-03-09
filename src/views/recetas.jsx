import Filter from "../components/filter"
import Sidebar from "../components/sidebar/sidebar"
import Cabecera from "../components/cabecera"
import Cuerpo from "../components/cuerpo"
import TablaRecetas from "../components/tablas/tablaRecetas"
import Footer from "../components/login_components/footer_login"
import CreatUpdateRece from "../components/Recetas_componentes/CreatUpdate"

export default function Receta(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
        <Sidebar />
        <div className="w-full relative ml-16">
          <Cabecera/>
          <Cuerpo modulo="Recetas" />
          <Filter name="Agregar receta" modulo="Recetas"/>
          <TablaRecetas/>
          <CreatUpdateRece title="Actualizar detalle de insumo" text="Ingrese la nueva 
              información que desea actualizar para la receta." campo1="Nombre" 
              campo2="Receta" campo3="Precio" selectProduct="Perro caliente"
              selectProduct1="Alas" selectProduct2="Hamburguesa" selectProduct3="Cubanos"
              selectReceta="Hamburguesa con queso" selectReceta1="Perrito queso tocineta" 
              selectReceta2="Alas comobo 1" selectReceta3="Cubano sencillo" boton="Actualizar" precio="$6.000"/>
          <Footer />
        </div> 
      </div>
    )
}