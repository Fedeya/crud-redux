import { 
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state;
  }
}