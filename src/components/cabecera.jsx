import "./styles/style-cabecera.css"
import Vector1 from "./icons/Vector1"
import Avatar from "./icons/Avatar"

import Campana from "./icons/Campana"
export default function Cabecera(){
    return(
        <div className="header">
            
        <div className="flecha">
        <Vector1 />
        <p>Hola marcus 👋</p>
        
        </div>

        <div className="img-2">
        <Campana/>
        <div className="user">
        <Avatar/>
            </div>
        </div>
        
        
            

            
        
            

        </div>
    )
}