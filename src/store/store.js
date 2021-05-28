import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { createWrapper } from "next-redux-wrapper";
import { save, load } from "redux-localstorage-simple";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(...middleware, save()));
  }
  return applyMiddleware(...middleware, load(), save());
};

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);
  console.log(context);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });

/*
const persistConfig = {
    key: 'martfury',
    storage,
    whitelist: ['cart', 'compare', 'auth', 'wishlist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
*/
