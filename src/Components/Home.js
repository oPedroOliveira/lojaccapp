import React from "react";
//import api from './apis';
import brigadeiro from "../cup_brigadeiro.png"
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
                <a href={"http://localhost:3000/item/i4"} className="ui medium image">
                    <img src={verde} alt="Cup Cake Verde" />
                </a>
            </div>
            <Footer />
        </div>
        
    )
}

export default Home;