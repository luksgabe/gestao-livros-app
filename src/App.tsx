import React from 'react';
import { Provider } from "react-redux";
import Routes from './routes';
import store from "./store";
import { history } from './services/history';
import { Router } from "react-router-dom";
import Layout from './components/Shared/Layout';


const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Routes/>
      </Layout>
    </Router>
  </Provider>
)

export default App;

