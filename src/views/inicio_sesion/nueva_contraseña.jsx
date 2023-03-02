import NavbarLogin from "../../components/login_components/navbar_login"
import FooterLogin from "../../components/login_components/footer_login"
import FormNueva from "../../components/login_components/form_nuevac"

export default function NuevaContraseña(){
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarLogin />
            <div className="w-full flex items-center justify-center my-20">
                <div>
                    <FormNueva />
                </div>
            </div>
            <FooterLogin />
        </div>
    )
}