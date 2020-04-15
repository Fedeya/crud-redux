import React from 'react';

function EditProduct() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
            </h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  id="price"
                  className="form-control"
                  placeholder="Product Price"
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;