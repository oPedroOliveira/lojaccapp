import React from "react";
//import api from './apis';

import Footer from "../Footer";

class Carrinho extends React.Component {
    /*api.get("/api/itemPedido")
            .then(result => {
                console.log(result.data)
                }
            );*/
    
    render(){
        return(
            <div>
                <div>
                    <div style={{margin: '20px'}} className="ui container">
                        <h2>Carrinho</h2>
                     </div>
                    <div style={{margin: '20px'}} className="ui container">
                        <p>O seu carrinho está vazio!</p>
                        <p>
                            Retorne para a  
                            <a href={'/'}> pagina inicial </a>
                            e confira nossos deliciosos CupCakes.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}

export default Carrinho;