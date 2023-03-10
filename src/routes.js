import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard"
import Insumo from "./views/insumos";
import Pedido from "./views/pedidos";
import Ventas from "./views/ventas";
import Producto from "./views/productos/productos";
import Receta from "./views/recetas/recetas";
import Usuarios from "./views/usuarios";
import Compras from "./views/compras";
import Addcompras from "./views/addcompras"
import Providers from "./views/providers";
import AddReceta from "./views/recetas/agregarReceta";

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
        path: "/dashboard",
        element: <Dashboard />
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
        path:"/addRecipe",
        element: <AddReceta/>
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
        path: "/addcompras",
        element: <Addcompras />
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
