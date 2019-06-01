import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProducto, editarProducto } from "../actions/productsActions";
import { withRouter } from 'react-router-dom';

class EditProduct extends Component {

  // to initialize the state
   state = { nombre: "", precio: 0 };
    
   componentDidMount() {
     const { id } = this.props;
    this.props.mostrarProducto(id).then(res=>{
      this.setState(this.props.producto)
    })
  };

  changeInput = e => {
    console.log(e.target.value);

    const {value, name} = e.target;
    this.setState({[name]: value});
  };
  guardarCambios = () => {
    //Guardar el producto
    this.props.editarProducto(this.state).then((res) => {
      this.props.history.push("/");
    })  
  };


    render() {
           
    return (
      <div className="container mt-4 col-md-4">
        <h3>Editar producto</h3>
      
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

const mapStateToProps = state => {
    return {
      productos: state.productos.productos,
      producto: state.productos.producto
    };
};

export default connect(mapStateToProps,{ mostrarProducto, editarProducto })(withRouter(EditProduct));
