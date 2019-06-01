import {
  MOSTRAR_PRODUCTOS,
  MOSTRAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  CREAR_PRODUCTO,
  EDITAR_PRODUCTO
  } from "./types";
    
  import axios from "axios";
//const URL = 'http://localhost:5000/productos/';
const URL = 'https://my-json-server.typicode.com/kellytobar/react-redux-productsJSON/productos/';

    export const mostrarProductos = () => async dispatch => {
        const respuesta = await axios.get(URL);
        console.log(respuesta);
        
        // with dispatch recturn the type and data
        dispatch({
          type: MOSTRAR_PRODUCTOS,
          payload: respuesta.data
        });
        
    };

    export const crearProducto = producto => async dispatch => {
    const respuesta = await axios.post(URL,producto);
    console.log(respuesta);
  
    dispatch({
      type: CREAR_PRODUCTO,
      payload: respuesta.data
    });
    //return { type: MOSTRAR_PRODUCTOS };
    };
    
    export const eliminarProducto = id => async dispatch => {
       const respuesta = await axios.delete(URL+id);
    
       dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: respuesta.data
       });
    };
    
    export const mostrarProducto = id => async dispatch => {
      const respuesta = await axios.get(URL+id);
    
      dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: respuesta.data
      });
    };

    
    export const editarProducto = producto => async dispatch => {
      const respuesta = await axios.put(URL+producto.id, producto);

      dispatch({
      type: EDITAR_PRODUCTO,
      payload: respuesta.data
      });
    };
     

  

    

        // export const mostrarProductos = () => {
        // return { type: MOSTRAR_PRODUCTOS};
         // };

        // export const crearProducto = producto => {
        // return { type: CREAR_PRODUCTO, payload: producto };
        // };