import axios from "axios";

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
    //history.push("/clientes");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
