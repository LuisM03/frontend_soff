import Filter from "../components/filter"
import Sidebar from "../components/sidebar/sidebar"
import Order from "../components/order"

export default function Compras(){
    return (
        <div className="flex">
          <Sidebar />
          <div>
            <Order/>
              <Filter/>
          </div>
        </div>
  )
}