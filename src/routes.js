import { createBrowserRouter } from "react-router-dom";
import Insumo from "./views/insumos";
import Pedido from "./views/pedidos";
import Ventas from "./views/ventas";
import Producto from "./views/productos/productos";
import Receta from "./views/recetas";
import Usuarios from "./views/usuarios";
import Compras from "./views/compras";
import Providers from "./views/providers";

import Login from "./views/inicio_sesion/login";
import RecuperarContraseña from "./views/inicio_sesion/recuperar_contraseña";
import RecuperarCodigo from "./views/inicio_sesion/recuperar_codigo";
import NuevaContraseña from "./views/inicio_sesion/nueva_contraseña";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/ventas",
        element: <Ventas />
    },
    {
        path: "/insumos",
        element: <Insumo />
    },
    {
        path: "/pedidos",
        element: <Pedido />
    },
    {
        path: "/productos",
        element: <Producto />
    },
    {
        path: "/recetas",
        element: <Receta />
    },
    {
        path: "/usuarios",
        element: <Usuarios />
    },
    {
        path: "/compras",
        element: <Compras />
    },
    {
        path: "/providers",
        element: <Providers />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "recovery_password",
        element: <RecuperarContraseña />
    },
    {
        path: "code_generation",
        element: <RecuperarCodigo />
    },
    {
        path: "new_password",
        element: <NuevaContraseña />
    }
    
    
    
])

export default router
