import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CreateCar } from './components/CreateCar';

import './custom.css'
import { ViewCar } from './components/ViewCar';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/createcar' component={CreateCar} />
            <Route path='/viewcar' component={ViewCar} />
      </Layout>
    );
  }
}
