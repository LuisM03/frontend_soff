import NavbarLogin from "../../components/login_components/navbar_login"
import FooterLogin from "../../components/login_components/footer_login"
import InputCedula from "../../components/login_components/form_recuperar"

export default function RecuperarContraseña(){
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarLogin />
            <div className="w-full flex items-center justify-center my-20">
                <div>
                    <InputCedula />
                </div>
            </div>
            <FooterLogin />
        </div>
    )
}