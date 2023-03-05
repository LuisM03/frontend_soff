import Filter from "../components/filter"
import Sidebar from "../components/sidebar/sidebar"
import Order from "../components/order"

export default function Compras(){
    return (
        <div className="flex bg-[#F2F2F2]">
          <Sidebar />
          <div>
            <Order name="Agregar insumo"/>
            <Filter/>
          </div>
        </div>
    )
}