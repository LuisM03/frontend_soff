import Sidebar from "../../components/sidebar/sidebar"
import Cabecera from "../../components/cabecera"
import Cuerpo from "../../components/cuerpo"
import Filter from "../../components/filter"
import Footer from "../../components/login_components/footer_login"
import TablaProductos from "../../components/tablas/tablaProductos"
import RegisterUpdate from "../../components/products_register_update/registerUpdate"
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
          <RegisterUpdate title="Registrando un nuevo producto" text="Ahora puedes registrar un producto, 
                  recuerda que todos los campos acontinuación son requeridos." campo1="Nombre" 
                  campo2="Receta" campo3="Precio" selectProduct="Seleccione el nombre del producto"
                  selectProduct1="Perro caliente" selectProduct2="Hamburguesa" selectProduct3="Cubanos"
                  selectReceta="Seleccione receta" selectReceta1="Perrito queso tocineta" 
                  selectReceta2="Perrito sencillo queso" selectReceta3="Cubano sencillo" boton="Guardar"/>
          <Footer />
        </div> 
      </div>
    )
}