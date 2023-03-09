export default function Registro(props){
    return(
        <div className="flex items-center sm:px-4 mb-10">
            <form className="">
                <div className=" items-center text-[#484848] rounded border bg-[white] w-[422px] p-6">
                    <h1 className="text-[#484848] pb-4"> <strong>Registrando un nuevo producto</strong> </h1>
                    <p className="text-[#687990] pb-7">Ahora puedes registrar un producto, 
                    recuerda que todos los campos acontinuación son requeridos.</p>
                    <div className="text-[#000000] opacity-[70%] font-semibold pb-2">
                         <p > Nombre</p>
                    </div>
                    <div className="flex p-4 items-center ml-4 text-[#757575] rounded h-12 border border-solid border-1 border-[#757575]">
                    <select className="pr-12">
                        <option hidden selected>Seleccione el nombre del producto</option>
                        <option value="">Perro caliente</option>
                        <option value="">Hamburguesa</option>
                        <option value="">Cubanos</option>
                    </select>
                </div>
                    <input id="" type="text"  placeholder="Filtrar busqueda..." className="outline-0 ml-2 bg-[#F8F8F8] h-full"/>
                </div>
            </form>
        </div>
    )}