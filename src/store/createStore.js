/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Redux create Store
 */

import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  // Encapsulate data on Reactotron
  return createStore(reducers, enhancer);
};
