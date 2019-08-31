import { POST_EMPRESTIMO } from "../actions/types";

const initialState = {
  emprestimo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_EMPRESTIMO:
      return { ...state, emprestimo: action.payload };
    default:
      return state;
  }
}
