import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCliente } from "../../actions/clienteActions";

class ClienteItem extends Component {
  onDeleteClick = id => {
    this.props.deleteCliente(id);
    window.location.reload();
  };

  render() {
    const { cliente } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{cliente.id}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{cliente.nome}</h3>
              <p>Rendimento: {cliente.rendimentoMensal}</p>
              <p>Risco: {cliente.risco}</p>
              <p>Endereço: {cliente.endereco}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/addEmprestimo/${cliente.id}`}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">
                      Simular Empréstimo
                    </i>
                  </li>
                </Link>
                <Link to={`/updateCliente/${cliente.id}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Editar cadastro</i>
                  </li>
                </Link>
                <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(this, cliente.id)}
                >
                  <i className="fa fa-minus-circle pr-1"> Excluir cliente</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ClienteItem.propTypes = {
  deleteCliente: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCliente }
)(ClienteItem);
