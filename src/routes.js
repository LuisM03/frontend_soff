import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas";
import Usuario from "./views/usuarios";
import Providers from "./views/providers";

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
        path: "/providers",
        element: <Providers />
    }
])

export default router