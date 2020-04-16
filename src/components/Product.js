import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteProductAction } from '../actions/productActions';

function Product({ product }) {

  const dispatch = useDispatch();
  const deleteProduct = id => dispatch(deleteProductAction(id));

  return (
    <tr>
      <td className="font-weight-bold">{product.name}</td>
      <td>{product.price}</td>
      <td className="actions">
        <Link 
          to={`/edit/${product.id}`}
          className="btn btn-primary mr-2"
        >
          Edit
        </Link>
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