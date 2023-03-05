// import "./styles/style-cuerpo.css"
import Time from "./icons/Time"
export default function Cuerpo(props){
    return(
        <div className="w-full h-[60px] flex justify-between items-center">
            <div className="ml-[20px]">
                <p className="text-[20px] text-[#757575]">{props.modulo}</p>
            </div>

            <div className="mr-[60px]">
                <Time/>
            </div>
        </div>
    )
}