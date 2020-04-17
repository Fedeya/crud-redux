import { 
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR
} from '../types';

const initialState = {
  products: [],
  product: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case EDIT_PRODUCT:
    case DELETE_PRODUCT:
    case GET_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case EDIT_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case GET_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    }

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }
    case GET_EDIT_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        product: null,
        loading: false,
        error: null
      }
    default:
      return state;
  }
}