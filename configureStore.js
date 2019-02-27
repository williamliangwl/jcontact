import { AsyncStorage } from 'react-native';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

export function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    // autoRehydrate(),
    // reduxReset()
  );

  const combinedReducers = combineReducers({
    ...reducers
  });

  let store = createStore(
    persistReducer({
      key: 'root',
      storage: AsyncStorage,
      whitelist: ['contact']
    }, combinedReducers),
    enhancer
  );

  if (module.hot) {
    module.hot.accept(() => {
      let nextReducers = require('./reducers').reducers;

      store.replaceReducer(combineReducers({
        ...nextReducers
      }));

    });
  }

  return new Promise(resolve => {
    const persistor = persistStore(store, null, () => {
      resolve({ store, persistor });
    });
  });
}