import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ControleFinaceiro from '../pages/ControleFinanceiro';
import CadastroControleFinaceiro from '../pages/CadatroControleFinandeiro';


export default function Routes() {
  return (
    <Switch>
    <Route path="/" exact component={ControleFinaceiro} />
    <Route path="/cadastro/:period/:id" component={CadastroControleFinaceiro} />
    <Route path="/cadastro/:period/" component={CadastroControleFinaceiro} />
  </Switch>
  )
}

