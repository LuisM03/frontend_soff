import { Link } from "react-router-dom"
import TitlesLogin from "./titles_login"

export default function FormLogin(){
    return (
        <div className="w-full sm:w-96 px-4 sm:px-0">
            <TitlesLogin title="¡Hola, Bienvenido de Nuevo! 👋" description="Es un placer tenerte de nuevo por acá, te deseo suerte con las ventas de hoy"/>
            <form>
                <div className="control flex flex-col mb-5">
                    <label htmlFor="" className="mb-2 text-[15px] font-medium">Número de cédula</label>
                    <input required type="text" className="w-full border px-2 text-[14px] py-2 rounded" placeholder="Ingrese su número de cédula"/>
                </div>
                <div className="control flex flex-col mb-5">
                    <label htmlFor="" className="mb-2 text-[15px] font-medium">Contraseña</label>
                    <input required type="password" className="w-full border px-2 text-[14px] py-2 rounded" placeholder="Ingrese su contraseña"/>
                </div>
                <div className="control flex flex-col mb-5">
                    <Link to="/recuperar_password" className="text-[14px] text-right font-medium">Recuperar contraseña</Link>
                </div>
                <div className="control flex flex-col">
                    <button className="text-[15px] text-white font-medium py-2 bg-[#0453F4] rounded">Iniciar sesión</button>
                </div>
            </form>
        </div>
    )
}