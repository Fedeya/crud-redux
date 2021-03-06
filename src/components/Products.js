import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsAction } from '../actions/productActions';

import Product from './Product';

function Products() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    const getProducts = () => dispatch(getProductsAction);
    getProducts();
  }, [])

  return (
    <Fragment>
      <h2 className="text-center my-5">
        List of Products
      </h2>
      { error && <p className="font-weight-bold alert alert-danger text-center mt-4">There was an error</p> }
      { loading && <p className="text-center">Loading...</p> }
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </tbody>
      </table>
    </Fragment>
  );
}

export default Products;