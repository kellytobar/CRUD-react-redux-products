import {
    MOSTRAR_PRODUCTOS,
    MOSTRAR_PRODUCTO,
    ELIMINAR_PRODUCTO,
    CREAR_PRODUCTO,
    EDITAR_PRODUCTO
} from "../actions/types";
    
    //State inicial, cada reducer debe tener su propio state
    const initialState = {
     productos: []
    };
    

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return { ...state, productos: action.payload };
            break;
        case CREAR_PRODUCTO:
            return { ...state, productos: [...state.productos, action.payload] };
            break;
        case ELIMINAR_PRODUCTO:
            return { ...state, productos: state.productos.filter((producto) => producto.id !== action.payload.id) };   
            break;  
        case MOSTRAR_PRODUCTO:
            return { ...state, producto: action.payload };
        case EDITAR_PRODUCTO:
            state.productos.forEach((producto)=>{
            if (producto.id===action.payload.id) {
            producto.nombre = action.payload.nombre;
            producto.precio = action.payload.precio;
            }
            })
            return {...state}
            break;
        // case CREAR_PRODUCTO:
        //     let convert = action.payload;
        //     convert.nombre = convert.nombre.toUpperCase();
        //     return {
        //         ...state,
        //         productos: [...state.productos, convert]
        //     };
        //     break;
        default:
            return state;
    }
}