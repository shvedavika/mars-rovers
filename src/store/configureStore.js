import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../rootSaga";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [ sagaMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  
  const enhancers = [ middlewareEnhancer ];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  );
  
  sagaMiddleware.run(rootSaga);
  return store;
}
