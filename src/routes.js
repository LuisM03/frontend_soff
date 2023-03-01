import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas";
import Usuario from "./views/usuarios";

const router = createBrowserRouter([
    {
        path: "/ventas",
        element: <Ventas />
    },
    {
        path: "/usuarios",
        element: <Usuario />
    }
])

export default router