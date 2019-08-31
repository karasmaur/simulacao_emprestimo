import { GET_CLIENTES, GET_CLIENTE } from "../actions/types";

const initialState = {
  clientes: [],
  cliente: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CLIENTES:
      return {
        ...state,
        clientes: action.payload
      };
    case GET_CLIENTE:
      return { ...state, cliente: action.payload };
    default:
      return state;
  }
}
