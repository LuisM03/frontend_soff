import Sidebar from "../components/sidebar/sidebar"
import Cabecera from "../components/cabecera"
import Cuerpo from "../components/cuerpo"
import Filter from "../components/filter"
import FooterLogin from "../components/login_components/footer_login"
import Tabla from "../components/tablas/tabla"
import { useState } from "react"
import Modal from "../components/modal"

export default function Ventas(){
    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
    }
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]">
            <Sidebar />
            <div className="w-full relative ml-16">
                <Cabecera />
                <Cuerpo modulo="Ventas" />
                <Filter name="Agregar ventas" modulo="ventas" activeModal={toggle}/>
                <Tabla />
                <FooterLogin />
            </div>
            <Modal active={active} toggle={toggle} width="max-h-[500px]">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil ipsa illo veritatis. Rerum beatae accusantium cupiditate pariatur quis eius provident, voluptatum ut, reiciendis laudantium magnam optio odit ducimus. Repudiandae corporis consequatur illum aut quam itaque ducimus? Aut iste quidem mollitia ut exercitationem minus, deleniti cumque doloremque magni ex voluptas aliquid illo corrupti deserunt, iusto officiis quasi possimus minima consectetur quae. Quas deleniti quibusdam delectus quam tempora odio porro laboriosam veniam ad, aspernatur fuga nam quae vero, reprehenderit, atque ex rerum non maiores consectetur ea rem architecto? Voluptatibus provident dolorum vel ducimus quos illum veritatis! Facilis expedita nihil et eligendi.</h1>
                <p>ckmkmdsokcdsc</p>
                <button className="border py-2 px-4" onClick={toggle}>
                    Cancelar
                </button>
            </Modal>
        </div>
    )
}