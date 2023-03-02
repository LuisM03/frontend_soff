import TitlesLogin from "./titles_login"
// import {useState} from "react"
// import IconEmail from "../icons/icon_email"
// import IconCall from "../icons/icon_call"


export default function InputCedula(){

    

    return (
        <div className="w-full sm:w-96 px-4 sm:px-0">
            <TitlesLogin title="¡Hey! Vamos a recuperar tu contraseña 🔐" description="Elije el medio por el cual deseas que enviemos un código de verificación"/>
            <div className="control flex flex-col mb-5">
                <label htmlFor="" className="mb-2 text-[15px] font-medium">Número de cédula</label>
                <input type="text" className="w-full border px-2 text-[14px] py-2 rounded" placeholder="Ingrese su número de cédula"/>
            </div>
            
            <div className="control flex flex-col">
                <button  className="text-[15px] text-white font-medium py-2 bg-[#0453F4] rounded">Enviar código</button>
            </div>
        </div>
    )
}