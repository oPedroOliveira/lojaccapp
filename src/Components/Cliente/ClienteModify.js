import React from "react";
import './ClienteModify.css'


const confirmaTermos = () => {
    return (
        <div className="field">
            <div className="ui checkbox">
                <input type="checkbox" tabindex="0" className="hidden"></input>
                <label>I agree to the Terms and Conditions</label>
            </div>
        </div>
    )
}

const CadastroCliente = () => {


    return (
        <div className="clienteForm">

            <form className="ui form">
                <div className="field">
                    <label>Nome</label>
                    <input type="text" name="obj.nome" placeholder="Nome"></input>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>CPF</label>
                        <input type="text" name="obj.CPF" placeholder="CPF"></input>
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input type="text" name="obj.Email" placeholder="E-mail"></input>
                    </div>
                </div>
                <button className="ui green button" type="submit">Salvar</button>
            </form>
        </div>

    );

}

export default CadastroCliente;