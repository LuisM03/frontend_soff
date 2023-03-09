import React, {Component} from "react";
import Portal from "./portal";

export default class Modal extends Component{
    render(){
        const {children, toggle, active, width} = this.props 
        return (
            <Portal>
                {active && (
                    <div className="">
                        <div className="container_popup absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                            <div className={`w-[93%] overflow-auto sm:w-[380px] h-[90%] ${width} fixed bg-white rounded p-[15px] drop-shadow-2xl z-10 my-4`}>
                                <div>{children}</div>
                            </div>
                            <div onClick={toggle} className="fixed w-full h-screen top-0 left-0 bg-black opacity-40"></div>
                        </div>
                    </div>
                )}
            </Portal>
        )
    }
}