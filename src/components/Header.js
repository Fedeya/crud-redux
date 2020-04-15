import React from 'react';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1> Crud - React, Redux, REST API & Axios </h1>
      </div>

      <a
        href="/products/new"
        className="btn btn-danger new-post d-block d-md-inline-block"
      >
        Add Product &#43;
      </a>
    </nav>
  </header>
);

export default Header;