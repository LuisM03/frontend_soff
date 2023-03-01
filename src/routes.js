import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas";
import Insumos from "./views/insumos";
import Pedidos from "./views/Pedidos";

const router = createBrowserRouter([
    {
        path: "/ventas",
        element: <Ventas />
    },
    {
        path: "/insumos",
        element: <Insumos />
    },
    {
        path: "/pedidos",
        element: <Pedidos />
    }
])

export default router