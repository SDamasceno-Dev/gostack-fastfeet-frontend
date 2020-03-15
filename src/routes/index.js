/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: All routes of the App
 */

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

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

      <Route path="/delivery" component={Delivery} isPrivate />
      <Route path="/courier" component={Courier} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/delivery/problem" component={DeliveryProblem} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
