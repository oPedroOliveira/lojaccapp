import React from "react";
import Footer from "../Footer";
import api from '../apis';
import history from '../../history';


class Pedido extends React.Component{
    constructor(props) {
        super(props);

        this.state = { objeto: [{ }], carregado : false }

    }

    componentDidMount() {
        api.get(`/api/pedido`)
                .then(result => {
                    this.setState({ objeto: result.data, carregado : true});
                })
                .catch( e => {
                    console.log("Erro sendo tratado: ", e.message);
                })
    }

    renderPedido = () => {
        const obj = this.state.objeto
        return(
            obj.map((p, i) => {
                return(
                    <tr>
                        <td>{i+1}</td>
                        <td>{p.qtdTotal}</td>
                        <td>{p.valorTotal}</td>
                        <td>{p.status}</td>
                        <td><a href={`http://localhost:3000/cliente/pedido/${p.pedidoId}`}>Ver Detalhes</a></td>
                    </tr>
                )
            })
        )
    }

    render(){
        const obj = this.state.objeto
        console.log(obj)
        return(
            <div id="pedido">
                <h1 style={{margin: '20px'}} className="ui header">Pedido</h1>
                <table class="ui striped table">
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Quantidade Itens</th>
                            <th>Valor Total</th>
                            <th>Situação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPedido()}
                    </tbody>
                </table>
                <button onClick={() => {history.push("/")}} className="tiny ui grey button">Voltar</button>
                < Footer />
            </div>
        )
    }
}

export default Pedido;