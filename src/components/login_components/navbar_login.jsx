import { Link } from "react-router-dom"

import LogoAzul from "../icons/logo_azul"

export default function NavbarLogin(){
    return (
        <div className="w-full bg-white flex items-center p-4 mx-auto max-w-7xl">
            <Link to="/"><LogoAzul /></Link>
        </div>
    )
}