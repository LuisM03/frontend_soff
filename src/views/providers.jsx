import Navbar from "../components/navbar"
import Tabla from "../components/tabla"
import Filter from "../components/filter"
import Cuerpo from "../components/cuerpo"
import Cabecera from "../components/cabecera"

export default function Providers(){
    return(
    <div className="flex">
        <Navbar/>
        <h1>HOlaaaaaaaa</h1>
        <div>
            <Tabla/>
        </div>
        <div className="flex h-screen w-screen border-2 border-black " >
          <div className="inline-block  w-full h-full relative ">
            <Cabecera/>
            <Cuerpo/>
            <Filter/>
            <Tabla/>
          </div> 
        </div>
     </div>
    )
}