import React from "react";
import Footer from "../Footer";
import api from '../apis';
import history from '../../history';

class ClientePedido extends React.Component {
    constructor(props) {
        super(props);

        this.state = { objeto: { itensPedido : [ { itemId: '', nome: ''}] }, itens: [{itemId: '', nome: ''}] }

    }

    componentDidMount() {
        api.get(`/api/pedido/${this.props.match.params.id}`)
                .then(result => {
                    this.setState({ objeto: result.data});
                })
                .catch( e => {
                    console.log("Erro sendo tratado: ", e.message);
                })
    }

    processaItem(id){
        if(id !== null && id !== ''){
            api.get(`/api/item/${id}`)
                    .then(result => {
                        this.state.itens.push(result.data)
                        console.log(this.state.itens)
                    })
                    .catch( e => {
                        console.log("Erro sendo tratado: ", e.message);
                    })

        }
    }

    retornaItem(idItem, propName){
        
        this.state.itens.forEach( i => {
            console.log(i)
        } )


        return "Nome do Item"
    }

    renderItemPedido = () => {
        const itensPedido = this.state.objeto.itensPedido
        
        itensPedido.forEach( i => {
            this.processaItem(i.itemId)
        })
        
        return (
            itensPedido.map( (element, index) => {
                return (
                        <tr>
                            <td>{this.retornaItem(element.itemId, 'nome')}</td>
                            <td>{element.quantidade}</td>
                            <td>{element.valor}</td>
                        </tr>
                        
                    );
                })
    
        )
    }



    render(){
        const pedido = this.state.objeto
        return(
                <div>
                    <div id="pedido" >
                        <h1 style={{margin: '20px'}} className="ui header">Pedido</h1>
                        <h3 style={{textAlign: 'right'}} className="ui header">Situação: {pedido.status}</h3>
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
                                {this.renderItemPedido()}
                            </tbody>
                        </table>
                        <div id="valorTotal">
                            <h3>
                                Total: {pedido.valorTotal}
                            </h3>
                            
                        </div>
                        <button onClick={() => {history.push("/")}} className="tiny ui grey button">Voltar</button>
                    </div>
                    < Footer />
                </div>
            )
        }
        
}

export default ClientePedido;