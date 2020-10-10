import React, { Component } from 'react';
import ValidatedLoginForm from './components/ValidatedLoginForm';
import ValidatedRegisterForm from './components/ValidatedRegisterForm'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './styles.css'

export default class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={ValidatedLoginForm} />
          <Route path='/register' exact component={ValidatedRegisterForm} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
    </BrowserRouter>
    )
  }
}
