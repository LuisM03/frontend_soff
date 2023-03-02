import NavbarLogin from "../../components/login_components/navbar_login"
import FormLogin from "../../components/login_components/form_login"
import FooterLogin from "../../components/login_components/footer_login"

export default function Login(){
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarLogin />
            <div className="w-full flex items-center justify-center my-20">
                <FormLogin />
            </div>
            <FooterLogin />
        </div>
    )
}