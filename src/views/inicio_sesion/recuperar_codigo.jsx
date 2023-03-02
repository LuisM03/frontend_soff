import NavbarLogin from "../../components/login_components/navbar_login"
import FooterLogin from "../../components/login_components/footer_login"
import FormCodigo from "../../components/login_components/form_codigo"

export default function RecuperarCodigo(){
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarLogin />
            <div className="w-full flex items-center justify-center my-20">
                <div>
                    <FormCodigo />
                </div>
            </div>
            <FooterLogin />
        </div>
    )
}