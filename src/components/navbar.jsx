import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./styles/style-navbar.css"
import InconoLogo from "./icons/iconologo"
import InconoInicio from "./icons/iconoinicio"
import InconoVentas from "./icons/iconoventas"
import InconoProductos from "./icons/iconoproductos"
import InconoUsuarios from "./icons/iconousuarios"
import InconoPedidos from "./icons/iconopedidos"
import InconoCompras from "./icons/iconocompras"
import InconoInsumos from "./icons/iconoinsumos"
import InconoRecetas from "./icons/iconorecetas"
import InconoProveedor from "./icons/iconoproveedor"
import InconoRoles from "./icons/iconoroles"
// import React from "react"
import "./styles/style-cabecera.css"
export default function Navbar(){

    useEffect(() => {
        const btn = document.getElementById('menu-btn');
        const menu = document.querySelector('#menu-lateral');
        btn.addEventListener("click", e => {
                menu.classList.toggle("menu-expanded")
                menu.classList.toggle("menu-collapsed")
                document.querySelector('body').classList.toggle('body-expanded')
        });
    }, []);



    return(
        <div id="menu-lateral" >
            <div id="header">
                <div id="menu-btn">
                    <InconoLogo/>
                </div>
                <div id="title">
                    <h1 className="textlogo1"><strong>SOFF</strong></h1>
                    <p className="textlogo">System Optimized Fast Food</p>
                </div>
            </div>

            < div id="menu-items">

                <div className="item">
                    <Link>
                        <div className="icon"><InconoInicio/></div>
                        <div className="title"><p>Inicio</p> </div>
                    </Link>
                </div>
                    
                <div className="item">
                    <Link to="/ventas">
                        <div className="icon"><InconoVentas/></div>
                        <div className="title"><p> Ventas</p></div>
                    </Link>
                </div>
                
                <div className="item">
                    <Link to="/pedidos">
                        <div className="icon"><InconoPedidos/></div>
                        <div className="title"><p> Pedidos</p></div>
                    </Link>
                </div>

                <div className="item">
                    <Link to="/compras">
                        <div className="icon"><InconoCompras/></div>
                        <div className="title"><p> Compras</p></div>
                    </Link>
                </div>

                <div className="item">
                    <Link  to="/insumos">
                        <div className="icon"><InconoInsumos/></div>
                        <div className="title"><p> Insumos</p></div>
                    </Link>
                </div>
                
                <div className="item">
                    <Link to="/productos"> 
                        <div className="icon"><InconoProductos/></div>
                        <div className="title"><p> Productos</p></div>
                    </Link>
                </div>

                <div className="item">
                    <Link to="/recetas">
                        <div className="icon"><InconoRecetas/></div>
                        <div className="title"><p> Recetas</p></div>
                    </Link>
                </div>
            
                <div className="item">
                    <Link  to="/usuarios">
                        <div className="icon"><InconoUsuarios/></div>
                        <div className="title"><p> Usuario</p></div>
                    </Link>
                </div>
            
                <div className="item">
                    <Link  to="/providers">
                        <div className="icon"><InconoProveedor/></div>
                        <div className="title"><p> Proveedores </p></div>
                    </Link>
                </div>

                <div className="item">
                    <Link to="">
                        <div className="iconrol"><InconoRoles/></div>
                        <div className="titlerol"><p >Roles y permisos</p></div>
                    </Link>  
                </div>
            </div>
        </div>
    )
    }
