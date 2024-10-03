import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantsReducer from "./reducers/restaurantReducer";
import productsReducer from "./reducers/productsReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
