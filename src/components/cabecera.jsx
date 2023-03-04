// import "./styles/style-cabecera.css"
import Vector1 from "./icons/Vector1"
import Avatar from "./icons/Avatar"

import Campana from "./icons/Campana"
export default function Cabecera(){
    return(
        <div className="w-full h-[60px] flex justify-between items-center">
            
            <div className="flex">
                <div className="flex justify-center items-center mr-[20px]" >
                    <Vector1 />

                </div>
                    <div className="flex justify-center items-center mr-[20px]">
                        <p className="text-[15px]">Hola marcus 👋</p>
                    </div>
            </div>
            

        <div className="flex mr-[60px]">
            <div className="mr-[20px] flex justify-center items-center">
                <Campana/>
            </div>
                <div>
                    <Avatar/>
                </div>         
                
        </div>     

        </div>
    )
}