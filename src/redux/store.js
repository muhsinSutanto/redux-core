import { createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { reducers } from "./reducers";

const store = createStore(reducers);

export default store;
