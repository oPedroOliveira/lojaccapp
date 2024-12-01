import React from "react";
import history from '../history'
//import api from './apis'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { user: {email: '', senha: '', isAutenticated: false} }
    }

    login = (e) => {
        e.preventDefault();

        let user = this.state.user
        
        /*if(user.email !== '') {
            console.log(user)
            api.post("/api/user", user) // alice92@mailinator.com - 73633358
                .then(result => {
                    if(result.data.senha === user.senha){
                        this.setState({ user : result.data, isAutenticated: true});
                    } else {
                        alert("Senha Inválida")
                    }
                })
                .catch( e => {
                    console.log("Erro sendo tratado: ", e.message);
                })
        }
       if(this.state.isAutenticated){
            localStorage.setItem('userAutenticated', JSON.stringify(this.state));
            console.log(localStorage.getItem('userAutenticated'))
        } else {
            alert("Credenciais Inválidas")
        }*/

            if(user.email === "alice92@mailinator.com" && user.senha === "73633358"){
                user.isAutenticated = true;
                this.setState({ user : user });
                localStorage.setItem('userAutenticated', JSON.stringify(this.state.user));
                //console.log(localStorage.getItem('userAutenticated'))
                history.push('/')
            } else {
                alert("Credenciais Inválidas")
            }
    

        
        
        
            
        
    }

    changeProp = (nameProp, valueProp) => {
        let u = this.state.user;
        u[nameProp] = valueProp;
        this.setState({ user: u });
    };


    render(){
        const user = this.state.user

        return (
            <div style={{ width: '80em', margin: '200px' }} className="ui placeholder segment">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                            <div className="field">
                                <label>Email</label>
                                <div className="ui left icon input">
                                    <input type="text" onChange={(e) => this.changeProp("email", e.target.value)} placeholder="Email" value={user.email}/>
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Senha</label>
                                <div className="ui left icon input">
                                    <input onChange={(e) => this.changeProp("senha", e.target.value)} type="password"  value={user.senha}/>
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                            <div onClick={this.login} className="ui blue submit button">Login</div>
                        </div>
                    </div>
                    <div className="middle aligned column">
                        <div onClick={() => {history.push("/cliente/novo/")}} className="ui big button">
                            <i className="signup icon"></i>
                            Cadastre-se
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                    Ou
                </div>
            </div>
        )
    }
    
}

export default Login;