import "./styles/style-cuerpo.css"
import Time from "./icons/Time"
export default function Cuerpo(){
    return(
        <div className="cuerpo">
            <div className="name-modulo">
                <p class="ttp02">Pedido</p>
            </div>

            <div className="time">
                <Time/>
            </div>
        </div>
    )
}