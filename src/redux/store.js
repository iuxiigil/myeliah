import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "./reducers/rootReducer"; //即combineReducers之后的rootReducer
import rootSaga from "./reducers/rootSaga"; //即combineReducers之后的rootReducer

//宣告一個永久（local Storage）儲存資料
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, //查看 'Merge Process' 部分的具体情况
};

const pReducer = persistReducer(persistConfig, rootReducer); // 包装rootReducer
const sagaMiddleware = createSagaMiddleware();
//传递给createStore函数 这个export
const createdStore = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const initializeStore = (initialState = {}) => {
  return createdStore;
};

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(createdStore); // 包装store 这个也export
