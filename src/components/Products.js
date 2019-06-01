import React from 'react';
import { connect } from 'react-redux';
import { mostrarProductos } from '../actions/productsActions';
import Product from './Product';
import { Link } from 'react-router-dom'

class Products extends React.Component {

    componentDidMount() {
         this.props.mostrarProductos();
     }
    
    render() {
        const { productos } = this.props;
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col col-md-4">
                    <h3>Listado de productos</h3>
                    </div>
                    <div className="col">
                    <Link to="/productos/nuevo">
                        <button className="btn btn-success">
                            Agregar producto
                        </button>
                    </Link>
                    </div>

                </div>    

                {
                    productos.map((producto, index) => {
                        return (<Product producto={producto} key={index} />);
                    })
                }
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        productos: state.productos.productos
    };
           
};

export default connect(mapStateToProps,{mostrarProductos})(Products);
