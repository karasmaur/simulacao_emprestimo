import React, { Component } from "react";
import ClienteItem from "./Cliente/ClienteItem";
import CreateClienteButton from "./Cliente/CreateClienteButton";
import { connect } from "react-redux";
import { getClientes } from "../actions/clienteActions";
import PropTypes from "prop-types";

class Clientes extends Component {
  componentDidMount() {
    this.props.getClientes();
  }

  render() {
    const { clientes } = this.props.cliente;
    return (
      <div className="Clientes">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Clientes</h1>
              <br />
              <CreateClienteButton />
              <br />
              <hr />
              {clientes.map(cliente => (
                <ClienteItem key={cliente.id} cliente={cliente} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Clientes.propTypes = {
  cliente: PropTypes.object.isRequired,
  getClientes: PropTypes.func.isRequired
};

const mapsStateToProps = state => ({ cliente: state.cliente });

export default connect(
  mapsStateToProps,
  { getClientes }
)(Clientes);
