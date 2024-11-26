import React from "react";
import Footer from "../Footer";

class ClientePedido extends React.Component {

    render(){
        return(
            <div>
                <div id="pedido" >
                    <h1 style={{margin: '20px'}} className="ui header">Pedido</h1>
                    <h3 style={{textAlign: 'right'}} className="ui header">Situação: Entregue</h3>
                    <table className="ui compact table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apples</td>
                                <td>200</td>
                                <td>R$ 1.00</td>
                                <td>R$ 200.00</td>
                            </tr>
                            <tr>
                                <td>Orange</td>
                                <td>310</td>
                                <td>R$ 1.00</td>
                                <td>R$ 310.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="valorTotal">
                        <h3>
                            Total: 510.00
                        </h3>
                        
                    </div>
                </div>
                < Footer />
            </div>
        )

    }
}

export default ClientePedido;