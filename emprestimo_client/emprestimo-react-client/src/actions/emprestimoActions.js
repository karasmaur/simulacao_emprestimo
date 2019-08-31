import axios from "axios";
import { GET_ERRORS, POST_EMPRESTIMO } from "./types";

export const createEmprestimo = (
  clienteId,
  emprestimo,
  history
) => async dispatch => {
  try {
    const res = await axios.post(
      `http://localhost:8082/api/emprestimo/${clienteId}`,
      emprestimo
    );
    return dispatch({
      type: POST_EMPRESTIMO,
      payload: res.data
    });
    //history.push("/clientes");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
