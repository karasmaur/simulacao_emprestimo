import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import clienteReducer from "./clienteReducer";
import emprestimoReducer from "./emprestimoReducer";

export default combineReducers({
  errors: errorReducer,
  cliente: clienteReducer,
  emprestimo: emprestimoReducer
});
