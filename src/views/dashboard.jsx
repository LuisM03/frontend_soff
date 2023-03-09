import Sidebar from "../components/sidebar/sidebar"
import Cabecera from "../components/cabecera"

export default function Dashboard(){
    return(
        <div className="flex min-h-screen w-full bg-[#F2F2F2]" >
        <Sidebar />
        <div className="w-full relative ml-16">
          <Cabecera/>
        </div>
        </div>
    )
}