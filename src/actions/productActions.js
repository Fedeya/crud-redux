import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from '../types';

import axios from '../config/axios';

import Swal from 'sweetalert2';

// create new product
export const addProductAction = product => async dispatch => {
  dispatch({
    type: ADD_PRODUCT
  });

  try {
    await axios.post('products', product);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: product
    });

    Swal.fire(
      'Success', 
      'the product was successfully added', 
      'success'
    );
  } catch(err) {
    dispatch({
      type: ADD_PRODUCT_ERROR
    });

    Swal.fire({
      icon: 'error',
      title: 'There was an error',
      text: 'there was an error, try again'
    });
  }

}