import TitlesLogin from "./titles_login"
import {useState} from "react"
import IconEmail from "../icons/icon_email"
import IconCall from "../icons/icon_call"


export default function InputCedula(){

    const [activate, setActivate] = useState("")
    const [second, setSecond] = useState("")

    const toggleSecond = () => {
        if (second === ""){
            setSecond("border-[#0453F4]")
        }else{
            setSecond("")
        }
        setActivate("")
    }
    
    const toggleActivate = () => {
        if (activate === ""){
            setActivate("border-[#0453F4]")
        }else{
            setActivate("")
        }
        setSecond("")
    }

    return (
        <div className="w-full sm:w-96 px-4 sm:px-0">
            <TitlesLogin title="¡Hey! Vamos a recuperar tu contraseña 🔐" description="Elije el medio por el cual deseas que enviemos un código de verificación"/>
            <div className="control flex flex-col mb-5">
                <label htmlFor="" className="mb-2 text-[15px] font-medium">Número de cédula</label>
                <input type="text" className="w-full border px-2 text-[14px] py-2 rounded" placeholder="Ingrese su número de cédula"/>
            </div>
            <div className={`border rounded py-3  px-4 flex justify-between h-20 mb-2 ${activate}`}>
                <div className="flex">
                    <div>
                        <span className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
                            <IconEmail />
                        </span>
                    </div>
                    <div className="mx-4">
                        <h1 className="font-semibold text-[15px]">Enviar código al correo</h1>
                        <p className="text-[13px] text-slate-400">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
                <div className="flex items-center h-full ">
                    <input type="checkbox" name="" id="check" onClick={() => toggleActivate()}/>
                </div>
            </div>
            <div className={`border border-dashed rounded py-3  px-4 flex justify-between h-20 mb-5 ${second}`}>
                <div className="flex">
                    <div>
                        <span className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
                            <IconCall />
                        </span>
                    </div>
                    <div className="mx-4">
                        <h1 className="font-semibold text-[15px] text-slate-400">Enviar código al teléfono</h1>
                        <p className="text-[13px] text-slate-400">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
                <div className="flex items-center h-full ">
                    <input type="checkbox" name="" id="" onClick={() => toggleSecond()}/>
                </div>
                
            </div>
            <div className="control flex flex-col">
                    <button  className="text-[15px] text-white font-medium py-2 bg-[#0453F4] rounded">Enviar código</button>
                </div>
        </div>
    )
}