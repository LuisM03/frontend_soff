import Sidebar from "../components/sidebar/sidebar"
import Cabecera from "../components/cabecera"
import Cuerpo from "../components/cuerpo"
import Filter from "../components/filter"
import FooterLogin from "../components/login_components/footer_login"

export default function Ventas(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]">
            <Sidebar />
            <div className="w-full relative ml-16">
                <Cabecera />
                <Cuerpo modulo="Ventas" />
                <Filter name="Agregar ventas"/>
                <FooterLogin />
            </div>
        </div>
    )
}