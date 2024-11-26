import React from "react";
import './Cliente.css'
import history from '../../history';
import api from '../apis';
import Footer from "../Footer";

const ConfirmaTermos = () => {
    
    return (
        <div className="field">
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

    
    incluir = (e) => {
        e.preventDefault();
        let obj = this.state.objeto;
        /*
        
        obj.nome = this.state.inserirNome
        obj.cpf = this.state.inserirCpf
        obj.email = this.state.inserirEmail
        */
        console.log(obj)
        
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

    render(){
        const obj = this.state.objeto; 
        
        /*
            <input type="text" onChange={(e) => this.setState({inserirNome: e.target.value})}  value={this.state.inserirNome} />
            <input type="text" onChange={(e) => this.setState({inserirCpf: e.target.value})}  value={this.state.inserirCpf} />
            <input type="text" onChange={(e) => this.setState({inserirEmail: e.target.value})}  value={this.state.inserirEmail}  />
        */

        return (
            <div>
                <div className="clienteForm">
                    <div>
                        <h1 className="ui header">Cadastro Cliente</h1>
                        <form className="ui form">
                            <div className="field">
                                <label>Nome</label>
                                <input type="text" onChange={(e) => this.changeProp("nome", e.target.value)} value={obj.nome} placeholder="Nome"/>
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <label>CPF</label>
                                    <input type="text" onChange={(e) => this.changeProp("cpf", e.target.value)} value={obj.cpf} placeholder="CPF"/>
                                </div>
                                <div className="field">
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