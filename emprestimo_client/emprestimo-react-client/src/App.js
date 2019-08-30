import React from "react";
import "./App.css";
import Clientes from "./components/Clientes";
import Emprestimo from "./components/Emprestimo";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCliente from "./components/Cliente/AddCliente";
import UpdateCliente from "./components/Cliente/UpdateCliente";
import AddEmprestimo from "./components/Emprestimo/AddEmprestimo";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/Clientes" component={Clientes} />
          <Route exact path="/addCliente" component={AddCliente} />
          <Route exact path="/updateCliente/:id" component={UpdateCliente} />
          <Route
            exact
            path="/addEmprestimo/:clienteId"
            component={AddEmprestimo}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
