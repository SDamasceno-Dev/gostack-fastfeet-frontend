/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: PAge with the Reactotron configuration
 */

import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
