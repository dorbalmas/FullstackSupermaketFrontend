import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SingleProduct from './SingleProduct';
import { apiGet } from '../../services/ApiServ';

class Products extends Component {
  state = {
    products: null,
  };

  async componentDidMount() {
    this.setState({ products: await apiGet() });
  }

  render() {
    return (
      <div className='container row m-1'>
        <Sidebar />
        <div className='row col-10 justify-content-center'>
          {this.state.products ? (
            this.state.products.map((i) => (
              <SingleProduct key={i._id} item={i} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
