import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/badges" component={Badges} />
        <Route path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}
