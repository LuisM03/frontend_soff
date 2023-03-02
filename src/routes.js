import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas";
import Usuario from "./views/usuarios";
import Compras from "./views/compras";

const router = createBrowserRouter([
    {
        path: "/ventas",
        element: <Ventas />
    },
    {
        path: "/usuarios",
        element: <Usuario />
    },
    {
        path: "/compras",
        element: <Compras />
    }
])

export default router