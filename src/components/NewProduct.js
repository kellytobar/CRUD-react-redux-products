import React, { Component } from "react";
import { connect } from "react-redux";
import { crearProducto } from "../actions/productsActions";

class NewProduct extends Component {
  // to initialize the state
  state = { nombre: "", precio: 0 };

  changeInput = e => {
    console.log(e.target.value);

    const {value, name} = e.target;
    this.setState({[name]: value});
  };
  guardarCambios = () => {
    //Guardar el producto
    console.log("guardando el producto");
    this.props.crearProducto(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container mt-4 col-md-4">
        <h3>Agregar producto</h3>
      
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input type="text" className="form-control" name='nombre' value={this.state.nombre} onChange={this.changeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="">Precio</label>
          <input  type="number" className="form-control" name='precio'  value={this.state.precio} onChange={this.changeInput} />
        </div>
        <div>
        <button onClick={this.guardarCambios} className="btn btn-success">
            Guardar
        </button>
        </div>

      </div>
     
    );
  }
}

export default connect(
  null,
  { crearProducto }
)(NewProduct);
