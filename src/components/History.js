import React, { Component } from 'react';
import logo from '../logo.svg';
import './Products.css';

class History extends Component {
  componentWillMount(){
    if(!this.props.products)
      this.props.getHistory()
  }
  render() {
    if(this.props.products) {
      return (
        <div className="product-list">
          {this.props.products.map(product => {
            return (
              <div key={product.createDate+product._id} className="product" >
                <div className="icon-disabled" >You spent {product.cost}
                  <div className="coin"></div>
                </div>
                <div>
                  <img src={product.img.url} alt={product.name} />
                </div>
                <div className="separator"></div>
                <div className="info">
                  <h3>{product.category}</h3>
                  <h3>{new Date(product.createDate).toLocaleString()}</h3>
                  <h2>{product.name}</h2>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="product-list">
          <div>Loading history...</div>        
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )
    }
  }
}

export default History;
