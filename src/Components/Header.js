import logo from "../berry_16134110.png"
import "../App.css"

function Header () {
    return(
        <div>
            <div className="btnsUserCard">
                <i style={{margin: '0 15px'}} className="shopping cart icon"></i>
                <a href={"carrinho"}>Carrinho</a>
                <i style={{margin: '0 15px'}} className="user plus icon"></i>
                <a href={"cliente/novo"}>Cadastre-se</a>
                <i style={{margin: '0 15px'}} className="user icon" />
                <a href={"login"}>Faça Login</a>
            </div>
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

export default Header