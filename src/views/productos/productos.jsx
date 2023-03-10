import Sidebar from "../../components/sidebar/sidebar"
import Cabecera from "../../components/cabecera"
import Cuerpo from "../../components/cuerpo"
import Footer from "../../components/login_components/footer_login"
import TablaProductos from "../../components/tablas/tablaProductos"
import CreatUpdateProd from "../../components/products_componentes/CreatUpdate"
import FiltrarBusqueda from "../../components/products_componentes/filtrarBusqueda"

import { useState } from "react"
import Modal from "../../components/modal"
  

export default function Producto(){
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)

    const toggle = () => {
        setActive(!active)
    }
    const toggle1 = () => {
      setActive1(!active1)
    }
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
            <Sidebar />
            <div className="w-full relative ml-16">
                  <Cabecera/>
                  <Cuerpo modulo="Productos" />
                  <FiltrarBusqueda name="Agregar producto" modulo="productos" activeModal={toggle}/>
                  <TablaProductos activeModal1={toggle1}/>
                  <Modal active={active} toggle={toggle} heigth="max-h-[610px]" width="w-[480px]">
                      <CreatUpdateProd 
                      title="Registrando un nuevo producto" 
                      text="Ahora puedes registrar un producto, 
                      recuerda que todos los campos acontinuación son requeridos." campo1="Nombre" 
                      campo2="Receta"
                      campo3="Precio"
                      selectProduct="Seleccione el nombre del producto"
                      selectProduct1="Perro caliente"
                      selectProduct2="Hamburguesa" 
                      selectProduct3="Cubanos"
                      selectReceta="Seleccione receta"
                      selectReceta1="Perrito queso tocineta" 
                      selectReceta2="Perrito sencillo queso"
                      selectReceta3="Cubano sencillo" 
                      boton="Guardar" 
                      precio="Ingrese el precio de venta"/>
                  </Modal>
                  <Modal active={active1} toggle={toggle1} heigth="max-h-[610px]" width="w-[480px]">
                    <CreatUpdateProd 
                      title="Actualizar un producto existente" 
                      text="Ahora puedes actualizar el producto,
                      recuerda que todos los campos a continuación son requeridos." 
                      campo1="Nombre" 
                      campo2="Receta" 
                      campo3="Precio" 
                      selectProduct="Perro caliente"
                      selectProduct1="Alas" 
                      selectProduct2="Hamburguesa" 
                      selectProduct3="Cubanos"
                      selectReceta="Hamburguesa con queso" 
                      selectReceta1="Perrito queso tocineta" 
                      selectReceta2="Alas comobo 1" 
                      selectReceta3="Cubano sencillo" 
                      boton="Actualizar" 
                      precio="$6.000"/>
                  </Modal>
                  <Footer/>
            </div> 
        </div>
    )
}