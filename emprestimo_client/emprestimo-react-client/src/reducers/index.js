import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import clienteReducer from "./clienteReducer";

export default combineReducers({
  errors: errorReducer,
  cliente: clienteReducer
});
