import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas"; //nombre de la funcion - nombre del documento
import Insumo from "./views/insumos";
import Pedido from "./views/pedidos";

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
    }
])

export default router