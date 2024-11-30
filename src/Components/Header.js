import React from "react";
import logo from "../berry_16134110.png"
import "../App.css"
//import history from "../history"

function sair(){
    localStorage.setItem('userAutenticated', "false")
}
const Menu = () => {
    let userAutenticated = localStorage.getItem('userAutenticated')
    console.log(userAutenticated)
    if (userAutenticated === null || userAutenticated === "false"){
        return (
            <div className="btnsUserCard">
            <i style={{margin: '0 15px'}} className="shopping cart icon"></i>
            <a href={"carrinho"}>Carrinho</a>
            <i style={{margin: '0 15px'}} className="user plus icon"></i>
            <a href="http://localhost:3000/cliente/novo/">Cadastre-se</a>
            <i style={{margin: '0 15px'}} className="user icon" />
            <a href="http://localhost:3000/login/">Faça Login</a>
            </div>
        )
    } else {
        return (
            <div className="btnsUserCard">
            <i style={{margin: '0 15px'}} className="shopping cart icon"></i>
            <a href={"carrinho"}>Carrinho</a>
            <i style={{margin: '0 15px'}} className="box icon"></i>
            <a href="http://localhost:3000/pedido">Pedidos</a>
            <i style={{margin: '0 15px'}} className="power off icon" />
            <a href="http://localhost:3000/" onClick={sair}>Sair</a>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){

        return(
            <div>
                <Menu />
                <div style={{margin: '20px'}} className="ui grid">
                    <div className="one wide column ">
                        <a href="http://localhost:3000">
                            <img id="icone"  src={logo}  alt="icone"/> 
                        </a>
                    </div>
                    <div id="titulo" className="six wide column ">
                        <h1>LOJA CUP CAKES</h1>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Header