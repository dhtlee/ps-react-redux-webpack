import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = process.env.NODE_ENV !== 'prod' ?
    [reduxImmutableStateInvariant(), thunk] :
    [thunk];

  return createStore(
    rootReducer, 
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
}