import React from "react";
//import api from './apis';
import brigadeiro from "../cup_brigadeiro.png"
import verde from "../cupcake_verde.jpg"
import Footer from "./Footer";

const Home = () => {
    /*api.get("/api/cliente")
            .then(result => {
                console.log(result)
                }
            );*/
    return(
        <div>
            <div className="btnsUserCard">
                <i style={{margin: '0 15px'}} className="shopping cart icon"></i>
                <i style={{margin: '0 15px'}} className="user plus icon"></i>
                <a href={"cliente/novo"}>Cadastre-se</a>
            </div>
            <div style={{margin: '20px'}} className="ui container">
                <h1>LOJA CUP CAKES</h1>
            </div>
            <div>
                <a href={"https://google.com"} className="ui medium image">
                    <img src={brigadeiro} alt="Cup Cake Brigadeiro" />
                </a>
                <a href={"https://google.com"} className="ui medium image">
                    <img src={verde} alt="Cup Cake Verde" />
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Home;