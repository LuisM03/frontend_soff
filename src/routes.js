import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas";
import Producto from "./views/productos";
import Receta from "./views/recetas";

const router = createBrowserRouter([
    {
        path: "/ventas",
        element: <Ventas />
    },
    {
        path: "/productos",
        element: <Producto />
    },
    {
        path: "/recetas",
        element: <Receta />
    }
])

export default router