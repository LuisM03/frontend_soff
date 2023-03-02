import TitlesLogin from "./titles_login"


export default function FormCodigo(){
    return(
        <div className="w-full sm:w-96 px-4 sm:px-0">
            <TitlesLogin title="¡ya falta poco! 💫" description="Hemos enviado un código de verificación al correo asociado a tu cuenta."/>
            <div>
                <form className="flex justify-center flex-col ">
                    <div className="flex items-center justify-between mx-12 mb-10">
                        <input type="text" className="border p-2 w-12 rounded text-center"/>
                        <input type="text" className="border p-2 w-12 rounded text-center"/>
                        <input type="text" className="border p-2 w-12 rounded text-center"/>
                        <input type="text" className="border p-2 w-12 rounded text-center"/>
                    </div>
                    <div className="control flex flex-col">
                        <button  className="text-[15px] text-white font-medium py-2 bg-[#0453F4] rounded">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}