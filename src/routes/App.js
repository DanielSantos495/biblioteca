import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  // pones baseman="" la ruta raiz del repositorio o donde esta el servicio
  // Esto para githubpages que manjera subdominios
  // por esto también pasa en las imagenes no se ven
  <BrowserRouter basename='/biblioteca/'>
    <Layout>
      <Switch>
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
