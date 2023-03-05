import InconoLogo from "../icons/iconologo"
import { Link } from "react-router-dom"
import { useState } from "react"

// Icons
import IconInicio from "./icons_sidebar/icon_inicio"
import IconVentas from "./icons_sidebar/icon_ventas"
import IconPedidos from "./icons_sidebar/icon_pedidos"
import IconCompras from "./icons_sidebar/icon_compras"
import IconRoles from "./icons_sidebar/icon_roles"
import IconInsumos from "./icons_sidebar/icon_insumos"
import IconProductos from "./icons_sidebar/icon_productos"
import IconProveedores from "./icons_sidebar/icon_proveedores"
import IconUsuarios from "./icons_sidebar/icon_usuarios"

export default function Sidebar(){

    const [open, setOpen] = useState(true)

    return (
        <div className={`bg-[#0453F4] min-h-screen ${!open ? "w-64":"w-16"} duration-500 px-4 text-[#B4CBFC] flex flex-col gap-4 relative justify-between`}>
            <div className="">
                <div className="mt-4 flex flex-col gap-4 relative">
                    <div className="flex items-center front-medium py-2 hover:text-white" >
                        <InconoLogo toggle={()=>setOpen(!open)} />
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    <Link to={"/dashboard"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconInicio color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Dashboard</h2>
                    </Link>
                    <Link to={"/ventas"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconVentas color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Ventas</h2>
                    </Link>
                    <Link to={"/pedidos"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconPedidos color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Pedidos</h2>
                    </Link>
                    <Link to={"/compras"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconCompras color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Compras</h2>
                    </Link>
                    <Link to={"/insumos"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconInsumos color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Insumos</h2>
                    </Link>
                    <Link to={"/productos"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconProductos color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Productos</h2>
                    </Link>
                    <Link to={"/providers"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconProveedores color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Proveedores</h2>
                    </Link>
                    <Link to={"/usuarios"} className="flex items-center gap-3.5 front-medium py-2 hover:text-white">
                        <div>
                            <IconUsuarios color="#B4CBFC"/>
                        </div>
                        <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Usuarios</h2>
                    </Link>
                </div>
                
            </div>
            <div>
                <Link to={"/roles"} className="flex items-center gap-3.5 front-medium py-6 hover:text-white">
                    <div>
                        <IconRoles color="#B4CBFC"/>
                    </div>
                    <h2 className={`whitespace-pre duration-500 ${open && "opacity-0 overflow-hidden"}`}>Roles y permisos</h2>
                </Link>
            </div>
        </div>
    )
}