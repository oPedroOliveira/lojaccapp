import React from 'react'
import Footer from "../Footer";
import api from '../apis';
import history from '../../history';
import './Item.css'
import brigadeiro from "../../cup_brigadeiro.png"

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = { objeto: {} }

    }

    componentDidMount() {
        api.get(`/api/item/${this.props.match.params.id}`)
            .then(result => {
                this.setState({ objeto: result.data});
            })
            .catch( e => {
                console.log("Erro sendo tratado: ", e.message);
            })
    }

    renderQtd = () => {
        const obj = this.state.objeto
        const element = document.querySelector("#qtd")
        
        for (let i = 1; i <= obj.quantidade; i++) {
            element.innerHTML += `<option value="${i}">${i}</option>`
            
        }
    }

    render(){
        
        return(
            <div>
                <div className="btnsUserCard">
                    <i style={{margin: '0 15px'}} className="shopping cart icon" />
                    <a href={"carrinho"}>Carrinho</a>
                    <i style={{margin: '0 15px'}} className="user plus icon" />
                    <a href={"cliente/novo"}>Cadastre-se</a>
                    <i style={{margin: '0 15px'}} className="user icon" />
                    <a href={"login"}>Faça Login</a>
                </div>
                <div style={{margin: '20px'}} className="ui container">
                    <h1>LOJA CUP CAKES</h1>
                </div>
                <div id='item'>
                    <div className="ui grid">
                        <div id="imagem" style={{placeItems:"center"}} className="eight wide column ">
                            <img className="ui medium image" src={brigadeiro}/>
                        </div>
                        <div className="six wide column">
                            <div className="field" style={{ marginTop: '50px'}}>
                                <h3>{this.state.objeto.nome}</h3>
                                <p>Cup Cake delicioso feito com carinho pra você!</p>
                            </div>
                            <div className="field" style={{ marginTop: '30px'}}>
                                <label>Preço: </label>
                                <h3 style={{ marginTop: '5px'}}>R${this.state.objeto.preco}0</h3>
                            </div>
                            <div className="field" style={{ width: '100px', marginTop: '30px'}}>
                                <label>Quantidade</label>
                                <select id="qtd" className="ui fluid dropdown">
                                    {this.renderQtd()}
                                </select>
                            </div>
                            
                                <button class="ui teal button" style={{ marginTop: '30px'}}>Adicionar ao Carrinho</button>
                                <button class="ui blue button" tabindex="2">Comprar Agora</button>
                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }


}

export default Item;