import axios from "axios";
import { GET_ERRORS, GET_CLIENTES, GET_CLIENTE, DELETE_CLIENTE } from "./types";

export const createCliente = (cliente, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8082/api/cliente", cliente);
    history.push("/clientes");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getClientes = () => async dispatch => {
  const res = await axios.get("http://localhost:8082/api/cliente");
  dispatch({
    type: GET_CLIENTES,
    payload: res.data
  });
};

export const getCliente = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8082/api/cliente/${id}`);
  dispatch({
    type: GET_CLIENTE,
    payload: res.data
  });
};

export const deleteCliente = id => async dispatch => {
  if (
    window.confirm(
      "Você tem certeza que deseja excluir esse cliente? Todos os dados e simulações vinculadas a ele serão excluídos permanentemente do sistema."
    )
  ) {
    await axios.delete(`http://localhost:8082/api/cliente/${id}`);
    dispatch({
      type: DELETE_CLIENTE,
      payload: id
    });
  }
};
