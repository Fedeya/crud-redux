import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteProductAction, getEditProductAction } from '../actions/productActions';

function Product({ product }) {

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteProduct = id => dispatch(deleteProductAction(id));
  const getEditProduct = p => dispatch(getEditProductAction(p));

  const goToEditProduct = () => {
    getEditProduct(product);
    history.push(`/edit/${product.id}`);
  }

  return (
    <tr>
      <td className="font-weight-bold">{product.name}</td>
      <td>{product.price}</td>
      <td className="actions">
        <button
          className="btn btn-primary mr-2"
          onClick={goToEditProduct}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;