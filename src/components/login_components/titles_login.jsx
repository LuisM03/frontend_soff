export default function TitlesLogin(props){
    return (
        <div className="mb-10 text-center flex flex-col items-center">
            <h1 className="font-bold text-[20px] mb-2 w-80">{props.title}</h1>
            <p className="text-[14px] text-slate-400">{props.description}</p>
        </div>
    )
}