/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: All routes of the App
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages of the App
import SignIn from '../pages/SignIn';
import Delivery from '../pages/Delivery';
import Courier from '../pages/Courier';
import Recipient from '../pages/Recipient';
import DeliveryProblem from '../pages/DeliveryProblem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/courier" component={Courier} />
      <Route path="/recipient" component={Recipient} />
      <Route path="/delivery/problem" component={DeliveryProblem} />
    </Switch>
  );
}
