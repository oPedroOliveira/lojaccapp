import React from "react";
//import api from './apis';
import brigadeiro from "../cupcake_brigadeiro.jpg"
import neutro from "../cupcake_neutro.jpg"
import amargo from "../cup_amargo.png"
import verde from "../cupcake_verde.jpg"
import Footer from "./Footer";
import "../App.css"
import Header from "./Header";


const Home = () => {
    /*api.get("/api/cliente")
            .then(result => {
                console.log(result.data)
                }
            );*/
    
    return(
        <div>
            <Header />
            <div>
            <a href={"http://localhost:3000/item/i1"} className="ui medium image">
                    <img src={brigadeiro} alt="Cup Cake Brigadeiro" />
                </a>
                <a href={"http://localhost:3000/item/i2"} className="ui medium image">
                    <img src={neutro} alt="Cup Cake Neutro" />
                </a>
                <a href={"http://localhost:3000/item/i3"} className="ui medium image">
                    <img src={amargo} alt="Cup Cake Chocolate Amargo" />
                </a>
                <a href={"http://localhost:3000/item/i4"} className="ui medium image">
                    <img src={verde} alt="Cup Cake Verde" />
                </a>
            </div>
            <Footer />
        </div>
        
    )
}

export default Home;