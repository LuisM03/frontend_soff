import Sidebar from "../components/sidebar/sidebar"
import Order from "../components/order"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"
import TablaOrder from "../components/tablas/tablaOrder"
import Modal from "../components/modal"
import CreatUpdateProd from "../components/products_componentes/CreatUpdate"
import Factura from "../components/factura"

import { useState } from "react"

export default function Addcompras(){
    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
    }
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Ordenes" />
            <div className="flex">
              <div className="w-[70%] ml-16">
                <Order name="Agregar Insumo"/>
                <TablaOrder activeModal={toggle}/>
                <Modal active={active} toggle={toggle} heigth="max-h-[590px]" width="w-[500px]">
                  <CreatUpdateProd
                  title="Actualizar Orden" 
                  text="Actualiza la información de tu orden" 
                  campo1="Nuevo proveedor" 
                  campo2="Nuevo insumo" 
                  campo3="Nueva cantidad" 
                  selectProduct="Seleccione el proveedor"
                  selectProduct1="VERDU-HIT" 
                  selectProduct2="S.A.S CARNE" 
                  selectProduct3="Morenos S.A.S"
                  selectReceta="Seleccione insumo" 
                  selectReceta1="Tocineta" 
                  selectReceta2="Salchichas" 
                  selectReceta3="Papas" 
                  boton="Actualizar" 
                  precio="Cantidad"/>
                </Modal>
              </div>
              <div className="w-[20%]">
                <Factura subtotal="$88.000" modulo="compra" users="Proveedor" name="VERDU-HIT"/>
              </div>
            </div>
            <Footer />
          </div> 
        </div>
    )
}