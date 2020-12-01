import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeDetails from "../pages/BadgeDetails";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeNew from "../pages/BadgeNew";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

//importacion de NotFound

import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
