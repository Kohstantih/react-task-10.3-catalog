import { combineReducers, compose, legacy_createStore } from "redux";

import GoodsReducer from "../reducers/GoodsReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
      combineReducers({
        goodsList: GoodsReducer,
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
}

export default configureStore;
