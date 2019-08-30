import React from "react";
import { Link } from "react-router-dom";

const CreateClienteButton = () => {
  return (
    <React.Fragment>
      <Link to="/addCliente" className="btn btn-lg btn-info">
        Criar cliente
      </Link>
    </React.Fragment>
  );
};

export default CreateClienteButton;
