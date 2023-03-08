// import "./styles/style-cuerpo.css"
import Time from "./icons/Time"
export default function Cuerpo(props){
    return(
        <div className="max-w-[1400px] px-4 mx-auto h-[60px] mt-10 flex justify-between items-center">
            <div className="">
                <p className="text-[20px] text-[#757575]">{props.modulo}</p>
            </div>

            <div className="">
                <Time/>
            </div>
        </div>
    )
}