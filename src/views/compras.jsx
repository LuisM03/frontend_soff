import Sidebar from "../components/sidebar/sidebar"
import TablaCompras from "../components/tablas/tablaCompras"
import TablaOrderCompra from "../components/tablas/tablaOrderCompra"
import Filter from "../components/filter"
import Footer from "../components/login_components/footer_login"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"

import { useState } from "react"
import Modal from "../components/modal"

export default function Compras(){
  const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
    }
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
          <Sidebar />
          <div className="w-full relative ml-16">
            <Cabecera/>
            <Cuerpo modulo="Compras" />
            <Filter name="Agregar Compra" modulo="compras" action={()=>{window.location.href = "/addcompras"}}/>
            <TablaCompras activeModal={toggle}/>
            <Footer />
          </div> 
          <Modal active={active} toggle={toggle} heigth="max-h-[450px]" width="w-[570px]">
                <TablaOrderCompra/> 
            </Modal>
        </div>
    )
}
