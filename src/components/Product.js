import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
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
        <button className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;