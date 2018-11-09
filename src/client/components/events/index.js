import React from "react";
import { Switch, Route } from "react-router-dom";
import EventCardView from "./components/views/eventCardView";
import EventListView from "./components/views/eventsListView";

const Events = () => (
  <Switch>
    <Route exact path="/events" component={EventListView} />
    <Route path="/events/:id" component={EventCardView} />
  </Switch>
);

export default Events;
