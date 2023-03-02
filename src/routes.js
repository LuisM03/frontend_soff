import { createBrowserRouter } from "react-router-dom";
import Insumo from "./views/insumos";
import Pedido from "./views/pedidos";
import Ventas from "./views/ventas";
import Producto from "./views/productos";
import Receta from "./views/recetas";
import Usuario from "./views/usuarios";
import Providers from "./views/providers";

const router = createBrowserRouter([
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
        element: <Usuario />
    },
    {
        path: "/providers",
        element: <Providers />
    }
])

export default router
