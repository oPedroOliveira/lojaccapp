import React from 'react'
import Footer from "../Footer";
import api from '../apis';
import './Item.css'
import brigadeiro from "../../cupcake_brigadeiro.jpg"
import neutro from "../../cupcake_neutro.jpg"
import amargo from "../../cup_amargo.png"
import verde from "../../cupcake_verde.jpg"
import no_img from "../../no_img.png"
import Header from "../Header";
import history from '../../history';

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
    
    renderImg = () => {
        const obj = this.state.objeto
        
        const div_img = document.querySelector("#imagem")
        
        if (div_img !== null){
            let img = document.createElement("img");
            
            if(obj.itemId === 'i1') {img.src=brigadeiro;}
            else if(obj.itemId === 'i2') {img.src=neutro;}
            else if(obj.itemId === 'i3') {img.src=amargo;}
            else if(obj.itemId === 'i4') {img.src=verde;}
            else {img.src=no_img;}
            
            img.className="ui medium image"
            div_img.appendChild(img);        

        }
    }

    comprar = (e) => {
        e.preventDefault();
        let userAutenticated = localStorage.getItem('userAutenticated')
        if (userAutenticated === null || userAutenticated === "false"){
            history.push('/login')
        } else {
            history.push('/cliente/Compra')
        }
    }

    render(){
        
        return(
            <div>
                < Header />
                <div id='item'>
                    <div className="ui grid">
                        <div id="imagem" style={{placeItems:"center"}} className="eight wide column ">
                            {this.renderImg()}
                            
                        </div>
                        <div className="six wide column">
                            <div className="field" style={{ marginTop: '50px'}}>
                                <h3>{this.state.objeto.nome}</h3>
                                <p>{this.state.objeto.descricao}</p>
                                <p>Peso: {this.state.objeto.peso}</p>
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
                            
                                <button className="ui teal button" style={{ marginTop: '30px'}}>Adicionar ao Carrinho</button>
                                <button onClick={this.comprar} className="ui blue button" tabIndex="2">Comprar Agora</button>
                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }


}

export default Item;