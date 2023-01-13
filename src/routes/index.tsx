import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import { Livros } from "../components/Livros";

const Routes = () => (
    <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Home} path="/home" />
        <Route component={Livros} path="/livros" />
    </Switch>
)

export default Routes;