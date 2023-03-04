import TitlesLogin from "./titles_login"

export default function FormNueva(){
    return (
        <div className="w-full sm:w-96 px-4 sm:px-0">
            <TitlesLogin title="¡Ya Estamos Aquí! 💎" description="Ingresa la nueva contraseña para tu cuenta y no se te olvide verificarla"/>
            <form>
                <div className="control flex flex-col mb-5">
                    <label htmlFor="" className="mb-2 text-[15px] font-medium">Nueva contraseña</label>
                    <input type="password" className="w-full border px-2 text-[14px] py-2 rounded" placeholder="Ingrese su nueva contraseña"/>
                </div>
                <div className="control flex flex-col mb-5">
                    <label htmlFor="" className="mb-2 text-[15px] font-medium">Verificar contraseña</label>
                    <input type="password" className="w-full border px-2 text-[14px] py-2 rounded" placeholder="Verifique su nueva contraseña"/>
                </div>
                <div className="control flex flex-col">
                    <button className="text-[15px] text-white font-medium py-2 bg-[#0453F4] rounded">Cambiar contraseña</button>
                </div>
            </form>
        </div>
    )
}