import React, { Component } from 'react';
import logo from '../logo.svg';
import './Products.css';

const host = 'https://aerolab-challenge.now.sh',
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjczNzk0ZjQ4ODVhMzAwNTg3MzYxMGUiLCJpYXQiOjE1MzQyOTQzNTF9.7AcaaniL-byI3YUtGXiONH5DKWaqcc5hst1IxHJfs4I';

class History extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: null
    }
  }
  componentWillMount(){
    fetch(host + '/user/history', {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then(o => o.json())
    .then(products => {
      products.sort(function(a, b){
        if (a.createDate > b.createDate)
          return -1 
        if (a.createDate < b.createDate)
          return 1
        return 0
      })
      this.setState({
        products
      })
    })
  }
  render() {
    if(this.state.products) {
      return (
        <div className="product-list">
          {this.state.products.map(product => {
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
