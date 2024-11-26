import './index.css';
import App from './Components/App';
import ClienteModify from './Components/Cliente/ClienteModify';
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Carrinho from './Components/Carrinho/Carrinho';

/*
ReactDOM.render(
    <Router history={history}>
        <Route path="/" exact={true} component={App} />
        <Route path="/album/" exact={true} component={AlbumCrud} />
        <Route path="/album/consultar/:id" exact={true} component={AlbumRead} />
        <Route path="/album/novo/" exact={true} component={AlbumModify} />
        <Route path="/album/alterar/:id" exact={true} component={AlbumModify} />
        <Route path="/album/deletar/:id" exact={true} component={AlbumDelete} />
    </Router>
    , document.querySelector("#root"));
    */

ReactDOM.render(
      <Router history={history}>
        <Route path="/" exact={true}  component={App} />
        <Route path="/cliente/novo/" exact={true}  component={ClienteModify} />
        <Route path="/cliente/alterar/:id" exact={true}  component={ClienteModify} />
        <Route path="/carrinho" exact={true}  component={Carrinho} />
      </Router>, document.querySelector("#root")
);

