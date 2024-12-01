import React from "react";
import './Cliente.css'
import history from '../../history';
import api from '../apis';
import Footer from "../Footer";
import logo from "../../berry_16134110.png"

const ConfirmaTermos = () => {
    
    return (
        <div className="required field">
            <div className="ui checkbox">
                <input type="checkbox"></input>
                <label>I agree to the Terms and Conditions</label>
            </div>
        </div>
        
    )
}

class ClienteModify extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objeto: {nome: '', cpf: '', email: '', cep:'', cidade:'', uf:'', logradouro:''}}
    }


    

    changeProp = (nameProp, valueProp) => {
        let obj = this.state.objeto;
        obj[nameProp] = valueProp;
        this.setState({ objeto: obj });
    };

    exibeErro = (campo) => {
        const form = document.querySelector("#formulario")
        let erro = document.querySelector("#erro")
        
        if (form !== null){
            if (erro === null){
                form.innerHTML += `<div id="erro" class="ui error message"><p>O campo ${campo} é obrigatório!</p></div>`
            } else {
                erro = document.querySelector("#erro")
                console.log(erro)
                erro.innerHTML = `<p>O campo ${campo} é obrigatório!</p>`
                
            }
        }
    }

    
    incluir = (e) => {
        e.preventDefault();
        let obj = this.state.objeto;
        
        if(obj.nome === ''){
            this.exibeErro("Nome")
        } else if (obj.cpf === '') {
            this.exibeErro("CPF")
        } else if (obj.email === '') {
            this.exibeErro("Email")
        } else {
            //http://localhost:5167/api/Cliente
            api.post("api/cliente", obj)
                .then(result => {
                    if(result.status === 201) {
                        history.push('/');
                    } else{
                        console.log(result)
                    }
                });
        }
    }  

    render(){
        const obj = this.state.objeto; 
        
        /*
            <input type="text" onChange={(e) => this.setState({inserirNome: e.target.value})}  value={this.state.inserirNome} />
            <input type="text" onChange={(e) => this.setState({inserirCpf: e.target.value})}  value={this.state.inserirCpf} />
            <input type="text" onChange={(e) => this.setState({inserirEmail: e.target.value})}  value={this.state.inserirEmail}  />
        */

        return (
            <div>
                <div>
                    <div style={{margin: '20px'}} className="ui grid">
                        <div className="one wide column ">
                            <a href="http://localhost:3000">
                                <img id="icone"  src={logo}  alt="icone"/> 
                            </a>
                        </div>
                        <div id="titulo" className="six wide column ">
                            <h1>LOJA CUP CAKES</h1>
                        </div>
                    </div>
                </div>
                <div id="formulario" className="clienteForm">
                    <div>
                        <form className="ui form">
                            <div className="required field">
                                <label>Nome</label>
                                <input type="text" onChange={(e) => this.changeProp("nome", e.target.value)} value={obj.nome} placeholder="Nome"/>
                            </div>
                            <div className="two fields">
                                <div className="required field">
                                    <label>CPF</label>
                                    <input type="text" onChange={(e) => this.changeProp("cpf", e.target.value)} value={obj.cpf} placeholder="CPF"/>
                                </div>
                                <div className="required field">
                                    <label>E-mail</label>
                                    <input type="text" onChange={(e) => this.changeProp("email", e.target.value)} value={obj.email} placeholder="Email"/>
                                </div>
                            </div>
                            <div className="fields">
                                <div className="four wide field">
                                    <label>CEP</label>
                                    <input type="text" onChange={(e) => this.changeProp("cep", e.target.value)} value={obj.cep} placeholder="CEP"></input>
                                </div>
                                <div className="ten wide field">
                                    <label>Cidade</label>
                                    <input type="text" onChange={(e) => this.changeProp("cidade", e.target.value)} value={obj.cidade} placeholder="Cidade"></input>
                                </div>
                                <div className="two wide field">
                                    <label>UF</label>
                                    <input type="text" onChange={(e) => this.changeProp("uf", e.target.value)} value={obj.uf} placeholder="UF"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label>Logradouro</label>
                                <input type="text" onChange={(e) => this.changeProp("logradouro", e.target.value)} value={obj.logradouro} placeholder="Logradouro"></input>
                            </div>
                            <ConfirmaTermos/>
                            <p>Sua senha inicial são os oito primeiros digitos do seu CPF (sem ponto e sem traço)</p>
                        </form>
                    </div>
                    <div className="btnsCadastro">
                        <button onClick={() => {history.push("/")}} className="ui bottom red button">Cancelar</button>
                        <button onClick={this.incluir} className="ui bottom green button" type="submit">Salvar</button>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}


export default ClienteModify;