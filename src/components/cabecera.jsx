import Avatar from "./icons/Avatar"
import IconNotification from "./Navbar/icons_navbar/icon_notification"

export default function Cabecera(props){
    return(
        <div className="w-full h-[60px] flex justify-between items-center bg-white">
            <p className="text-[15px] ml-4 ">Hola {props.username} {props.lastname} 👋</p>
            <div className="flex mr-4">
                <div className="mr-[20px] flex justify-center items-center">
                    <IconNotification/>
                </div>
                <div>
                    <Avatar image="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>         
            </div>     

        </div>
    )
}