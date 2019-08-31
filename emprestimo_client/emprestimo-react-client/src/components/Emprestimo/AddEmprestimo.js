import React, { Component } from "react";
import { createEmprestimo } from "../../actions/emprestimoActions";
import { getCliente } from "../../actions/clienteActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class AddEmprestimo extends Component {
  constructor() {
    super();
    this.state = {
      valorContratado: "",
      prazo: "",
      juros: "",
      valorTotal: "",
      cliente: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { id, nome, rendimentoMensal, endereco } = nextProps.cliente;

    this.setState({ id, nome, rendimentoMensal, endereco });
  }

  componentDidMount() {
    const { clienteId } = this.props.match.params;
    this.props.getCliente(clienteId, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newEmprestimo = {
      valorContratado: this.state.valorContratado,
      prazo: this.state.prazo
    };
    this.props.createEmprestimo(
      this.state.id,
      newEmprestimo,
      this.props.history
    );
  }

  render() {
    const { emprestimo } = this.props;
    return (
      <div>
        <div className="cliente">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Simular empréstimo</h5>
                <hr />
                <p>Nome do Cliente: {this.state.nome}</p>
                <p>Rendimento Mensal: {this.state.rendimentoMensal}</p>
                <p>Risco: {this.state.cliente.risco}</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Valor a contratar"
                      name="valorContratado"
                      value={this.state.valorContratado}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="numeric"
                      className="form-control form-control-lg"
                      placeholder="Prazo(Mensal)"
                      name="prazo"
                      value={this.state.prazo}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="numeric"
                      className="form-control form-control-lg"
                      placeholder="Valor total"
                      name="valorTotal"
                      value={new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                      }).format(emprestimo.valorTotal || 0)}
                      disabled
                    />
                  </div>
                  <input
                    type="submit"
                    value="Simular"
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

AddEmprestimo.propTyps = {
  getCliente: PropTypes.func.isRequired,
  createCliente: PropTypes.func.isRequired,
  cliente: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cliente: state.cliente.cliente,
  emprestimo: state.emprestimo.emprestimo
});

export default connect(
  mapStateToProps,
  { getCliente, createEmprestimo }
)(AddEmprestimo);
