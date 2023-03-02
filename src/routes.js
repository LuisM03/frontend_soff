import { createBrowserRouter } from "react-router-dom";
import Ventas from "./views/ventas";

const router = createBrowserRouter([
    {
        path: "/ventas",
        element: <Ventas />
    }
])

export default router