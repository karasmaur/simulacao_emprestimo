import React, { Component } from "react";
import { getCliente, createCliente } from "../../actions/clienteActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateCliente extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      nome: "",
      rendimentoMensal: "",
      endereco: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { id, nome, rendimentoMensal, endereco } = nextProps.cliente;

    this.setState({ id, nome, rendimentoMensal, endereco });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCliente(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updatedCliente = {
      id: this.state.id,
      nome: this.state.nome,
      rendimentoMensal: this.state.rendimentoMensal,
      endereco: this.state.endereco
    };
    this.props.createCliente(updatedCliente, this.props.history);
  }

  render() {
    return (
      <div>
        <div className="cliente">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Editar cadastro de cliente
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="ID"
                      name="id"
                      value={this.state.id}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Nome"
                      name="nome"
                      value={this.state.nome}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Rendimento Mensal"
                      name="rendimentoMensal"
                      value={this.state.rendimentoMensal}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Endereço"
                      name="endereco"
                      value={this.state.endereco}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateCliente.propTyps = {
  getCliente: PropTypes.func.isRequired,
  createCliente: PropTypes.func.isRequired,
  cliente: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ cliente: state.cliente.cliente });

export default connect(
  mapStateToProps,
  { getCliente, createCliente }
)(UpdateCliente);
