import React from "react";

import Footer from "./Footer";

class Compra extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <div style={{margin: '20px'}} className="ui container">
                        <h2>Compra Realizada com sucesso!</h2>
                     </div>
                    <div style={{margin: '20px'}} className="ui container">
                        <p>Agora é só aguardar o ser pedido chegar e se deliciar.</p>
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

export default Compra;