import React from 'react';
import { connect } from 'react-redux';
import { eliminarProducto } from "../actions/productsActions";
import { withRouter, Link} from 'react-router-dom';

class Product extends React.Component {

    handleDelete = () => {
        if (window.confirm('Estas seguro?')){
            this.props.eliminarProducto(this.props.producto.id).then(() => {
            this.props.history.go(0);
                //this.props.history.push('/');
            });
        }
    };

    render() {
        const { producto } = this.props;
        return (

            <table className="table table-hover col-md-6 mt-4">
                <tbody>
                    <tr>
                    <th scope="row">{producto.id}</th>
                    <th  className="col-md-1" scope="row">{producto.nombre}</th>
                        <td>{producto.precio}</td>
                        <td><Link to={`/productos/edit/${producto.id}`}>
                            <button className="btn btn-outline-success btn-sm">
                                Editar
                            </button>
                            </Link>   
                        </td>
                        <td><button onClick={this.handleDelete} className="btn btn-outline-danger btn-sm">
                            Eliminar
                            </button>
                        </td>
                    </tr>  
                </tbody>
            </table>           
        )
    }
   
}

export default connect(null,{ eliminarProducto })(withRouter(Product));
