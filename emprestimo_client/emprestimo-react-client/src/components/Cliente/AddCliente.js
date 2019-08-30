import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCliente } from "../../actions/clienteActions";
import classnames from "classnames";

class AddEmprestimo extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      rendimentoMensal: "",
      endereco: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newCliente = {
      nome: this.state.nome,
      rendimentoMensal: this.state.rendimentoMensal,
      endereco: this.state.endereco
    };

    this.props.createCliente(newCliente, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="cliente">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Cadastro de Cliente</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.nome
                      })}
                      placeholder="Nome"
                      name="nome"
                      value={this.state.nome}
                      onChange={this.onChange}
                    />
                    {errors.nome && (
                      <div className="invalid-feedback">{errors.nome}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.rendimentoMensal
                      })}
                      placeholder="Rendimento Mensal"
                      name="rendimentoMensal"
                      value={this.state.rendimentoMensal}
                      onChange={this.onChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.rendimentoMensal}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.endereco
                      })}
                      placeholder="Endereço"
                      name="endereco"
                      value={this.state.endereco}
                      onChange={this.onChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.endereco}</div>
                    )}
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

AddCliente.propTypes = {
  createCliente: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createCliente }
)(AddCliente);
