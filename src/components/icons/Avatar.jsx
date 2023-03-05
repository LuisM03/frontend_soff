
export default function avatar(props){
    return(
        <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
            <img src={props.image} alt="" />
        </div>
    )
}