import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  authReducer,
  productReducer,
});
