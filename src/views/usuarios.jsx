import Sidebar from "../components/sidebar/sidebar"
import Cabecera from "../components/cabecera"
import Cuerpo from "../components/cuerpo"
import TablaUsuario from "../components/tablas/tabla_usuarios"
import Filter from "../components/filter"
import FooterLogin from "../components/login_components/footer_login"

export default function Usuarios(){
    return (
        <div className="flex min-h-screen w-full bg-[#F2F2F2]">
            <Sidebar />
            <div className="w-full relative ml-16">
                <Cabecera />
                <Cuerpo modulo="Usuarios" />
                <Filter name="Agregar usuario" />
                <TablaUsuario />
                <FooterLogin />
            </div>
        </div>
    )
}